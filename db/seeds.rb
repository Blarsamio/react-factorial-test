# Creating a sample metric
require 'faker'

puts "Cleaning database..."
Metric.destroy_all
puts "Database cleaned!"


puts "Creating metrics..."
100.times do
  Metric.create!(
    date: Faker::Time.between(from: '2020-01-01', to: '2022-12-31'),
    value: Faker::Number.decimal(l_digits: 2, r_digits: 2),
    name: 'Ben'
  )
end
100.times do
  Metric.create!(
    date: Faker::Time.between(from: '2020-01-01', to: '2022-12-31'),
    value: Faker::Number.decimal(l_digits: 2, r_digits: 2),
    name: 'Santi'
  )
end
100.times do
  Metric.create!(
    date: Faker::Time.between(from: '2020-01-01', to: '2022-12-31'),
    value: Faker::Number.decimal(l_digits: 2, r_digits: 2),
    name: 'Camila'
  )
end
100.times do
  Metric.create!(
    date: Faker::Time.between(from: '2020-01-01', to: '2022-12-31'),
    value: Faker::Number.decimal(l_digits: 2, r_digits: 2),
    name: 'Pato'
  )
end
puts "#{Metric.count} metrics created!"
