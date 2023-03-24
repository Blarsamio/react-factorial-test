import AvgData from "./AvgData";

export const UserAvg = (name, freq) => {
  const set = [];
  const freQuency = AvgData(freq);
  const userFreq = freQuency.filter((metric) => metric.name === name);
  const date = freQuency.map((metric) => metric.month);
  const years = date.map((metric) => new Date(metric).getFullYear());

  const uniqueYears = [...new Set(years)]

  if (freq === "monthly") {
    const firstYearData =  userFreq.filter((metric) => new Date(metric.month).getFullYear() === uniqueYears[0])
    const secondYear = uniqueYears[1]
    const thirdYear =  uniqueYears[2]
    const fourthYear =  uniqueYears[3]
   }

  Object.values(userFreq).forEach((metric) => {
    set.push({
      "value": metric.avg
    })
  })
  return set;
}

export const YearlyAverage = (name , freq, year) => {
  const set = [];
  const freQuency = AvgData(freq);
  const userFreq = freQuency.filter((metric) => metric.name === name);
  const date = freQuency.map((metric) => metric.month);
  const years = date.map((metric) => new Date(metric).getFullYear());

  const yearlyData =  userFreq.filter((metric) => new Date(metric.month).getFullYear() === year)

  Object.values(yearlyData).forEach((metric) => {
    set.push({
      "value": metric.avg
    })
  })
  return set;
}
