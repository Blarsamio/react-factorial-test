import React, { Component } from 'react';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import Charts from 'fusioncharts/fusioncharts.charts';
import { UserAvg, YearlyAverage } from './Averages';


ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
Charts(FusionCharts);

const chartComponent = () => {
  const [year, setYear] = React.useState(2020);

  const patoMonth = YearlyAverage("Pato", "monthly", year);
  const benMonth = YearlyAverage("Ben", "monthly", year);
  const camilaMonth = YearlyAverage("Camila", "monthly", year);
  const santiMonth = YearlyAverage("Santi", "monthly", year);

  const patoDay = UserAvg("Pato", "daily");
  const benDay = UserAvg("Ben", "daily");
  const camilaDay = UserAvg("Camila", "daily");
  const santiDay = UserAvg("Santi", "daily");

  const patoYear = UserAvg("Pato", "yearly");
  const benYear = UserAvg("Ben", "yearly");
  const camilaYear = UserAvg("Camila", "yearly");
  const santiYear = UserAvg("Santi", "yearly");

  const changeYearlyData = () => {
    const randomYear = Math.floor(Math.random() * 4) + 2020; // generates a random year between 2020 and 2023
    setYear(randomYear);
  };

  const monthlyCategories = [
    {
      "category": [
        { "label": "Jan" },
        { "label": "Feb" },
        { "label": "Mar" },
        { "label": "Apr" },
        { "label": "May" },
        { "label": "Jun" },
        { "label": "Jul" },
        { "label": "Aug" },
        { "label": "Sep" },
        { "label": "Oct" },
        { "label": "Nov" },
        { "label": "Dec" }
      ]
    }
  ]
  const dailyCategories = [
    {
      "category": [
        { "label": "Mon" },
        { "label": "Tue" },
        { "label": "Wed" },
        { "label": "Thu" },
        { "label": "Fri" },
        { "label": "Sat" },
        { "label": "Sun" }
      ]
    }
  ]
  const yearlyCategories = [
    {
      "category": [
        { "label": "2020" },
        { "label": "2021" },
        { "label": "2022" },
        { "label": "2023" }
      ]
    }
  ]
  const monthlyDataset = [
    {
      "seriesname": "Pato",
      "data": patoMonth
    },
    {
      "seriesname": "Ben",
      "data": benMonth
    },
    {
      "seriesname": "Camila",
      "data": camilaMonth
    },
    {
      "seriesname": "Santi",
      "data": santiMonth
    }
  ]
  const dailyDataset = [
    {
      "seriesname": "Pato",
      "data": patoDay
    },
    {
      "seriesname": "Ben",
      "data": benDay
    },
    {
      "seriesname": "Camila",
      "data": camilaDay
    },
    {
      "seriesname": "Santi",
      "data": santiDay
    }
  ]
  const yearlyDataset = [
    {
      "seriesname": "Pato",
      "data": patoYear
    },
    {
      "seriesname": "Ben",
      "data": benYear
    },
    {
      "seriesname": "Camila",
      "data": camilaYear
    },
    {
      "seriesname": "Santi",
      "data": santiYear
    }
  ]


  // STEP 4 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: 'mscolumn2d',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      //Chart Configurations
      "chart": {
        "theme": "fusion",
        "caption": "Average Revenue per Salesperson",
        "yAxisName": "Sales (In EUR)",
        "numberPrefix": "$",
        "plotFillAlpha": "80",
        "divLineIsDashed": "1",
        "divLineDashLen": "1",
        "divLineGapLen": "1",
        "showToolTip": "1",
        "decimals": "2",
      },
      "categories": monthlyCategories,
      "dataset": monthlyDataset,
    }
  }


  class Chart extends Component {
    constructor(props) {
      super(props);
      this.state = chartConfigs;
      this.updateDaily = this.updateDaily.bind(this);
      this.updateMonthly = this.updateMonthly.bind(this);
      this.updateYearly = this.updateYearly.bind(this);
    }

    updateDaily() {
      var prevDs = Object.assign({}, this.state.dataSource);
      prevDs.chart.caption = "Comparison of Daily Revenue";
      prevDs.categories = dailyCategories;
      prevDs.dataset = dailyDataset;
      this.setState({
        dataSource: prevDs,
      });
    }

    updateMonthly() {
      var prevDs = Object.assign({}, this.state.dataSource);
      prevDs.chart.caption = "Comparison of Monthly Revenue";
      prevDs.categories = monthlyCategories;
      prevDs.dataset = monthlyDataset;
      this.setState({
        dataSource: prevDs,
      });
    }

    updateYearly() {
      var prevDs = Object.assign({}, this.state.dataSource);
      prevDs.categories = yearlyCategories;
      prevDs.dataset = yearlyDataset;
      this.setState({
        dataSource: prevDs,
      });
    }

    render() {
      return (
        <div className='self-center w-full h-full flex flex-col'>
          <ReactFC {...this.state} className="self-center" />
          <center className='flex flex-row justify-between mb-3'>
            <button
              className='btn1'
              onClick={this.updateDaily}
            >
              <p>Change to Daily Avg</p>
            </button>
            <button
              className='btn1'

              onClick={this.updateMonthly}
            >
              <p>Change to Monthly Avg</p>
            </button>
            <button
              className='btn1'

              onClick={this.updateYearly}
            >
              <p>Change to Yearly Avg</p>
            </button>
          </center>
           { this.state.dataSource.categories[0].category[0].label === "Jan" ? (
            <button className='btn2 w-52 self-center' onClick={changeYearlyData}><p>Change Year: {year}</p></button>
            ) : null }
        </div>
      );
    }
  };
  return <Chart chartConfigs={chartConfigs} />;
}


export default chartComponent;
