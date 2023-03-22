const getAverage= (data) => {
  const keys = Object.keys(data);

  const averages = {}
  let sum = 0
  keys.forEach((key) => {
    data[key].forEach((metric) => {
      sum += metric.value
    })
    sum = sum / data[key].length
    averages[key] = sum
  })
  return averages
}

export default getAverage;
