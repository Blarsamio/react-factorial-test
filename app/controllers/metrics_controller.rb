class MetricsController < ApplicationController
  def json
    json_query = <<-SQL
      SELECT * FROM metrics
      ORDER BY
        date DESC
    SQL
    results = ActiveRecord::Base.connection.execute(json_query).to_a
    render json: results
  end

  def index
    @metric = Metric.new
    @metrics = Metric.all
  end

  def new
    @metric = Metric.new
  end

  def create
    @metric = Metric.new(metric_params)
    if @metric.save
      render json: { status: :created, notice: "Metric created successfully" }
    else
      render json: { status: :unprocessable_entity, notice: @metric.errors.full_messages.join(", ") }
    end
  end

  def show
    @metric = Metric.find(params[:id])
  end

  def monthly_average
    monthly_average_query = <<-SQL
      SELECT
        DATE_TRUNC('month', date) AS month,
        AVG(value) AS avg,
        name
      FROM
        metrics
      GROUP BY
        DATE_TRUNC('month', date),
        name
      ORDER BY
        DATE_TRUNC('month', date) ASC
    SQL
    results = ActiveRecord::Base.connection.execute(monthly_average_query).to_a
    render json: results
  end

  def daily_average
    daily_average_query = <<-SQL
      SELECT
        to_char(date, 'ID') AS day,
        AVG(value) AS avg,
        name
      FROM
        metrics
      GROUP BY
        to_char(date, 'ID'),
        name
      ORDER BY
        to_char(date, 'ID') ASC
    SQL
    results = ActiveRecord::Base.connection.execute(daily_average_query).to_a
    render json: results
  end

  def weekly_average
    weekly_average_query = <<-SQL
      SELECT
        DATE_TRUNC('week', date) AS week,
        AVG(value) AS avg,
        name
      FROM
        metrics
      GROUP BY
        DATE_TRUNC('week', date),
        name
      ORDER BY
        DATE_TRUNC('week', date) ASC
    SQL
    results = ActiveRecord::Base.connection.execute(weekly_average_query).to_a
    render json: results
  end

  def yearly_average
    yearly_average_query = <<-SQL
      SELECT
        DATE_TRUNC('year', date),
        AVG(value),
        name
      FROM
        metrics
      GROUP BY
        DATE_TRUNC('year', date),
        name
      ORDER BY
        DATE_TRUNC('year', date) ASC
    SQL
    results = ActiveRecord::Base.connection.execute(yearly_average_query).to_a
    render json: results
  end

  private

  def metric_params
    params.require(:metric).permit(:name, :value, :date)
  end
end
