# Creating a sample metric

puts "Cleaning database..."
Metric.destroy_all
puts "Database cleaned!"


puts "Creating metrics..."
Metric.create([{ name: 'Test name 1', value: 102.4 }, { name: 'Test name 2', value: 75.4 }])
puts "#{Metric.count} metrics created!"
