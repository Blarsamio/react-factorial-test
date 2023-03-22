import AvgData from "./AvgData";

const UserAvg = (name, freq) => {
  const set = [];
  const daily = AvgData(freq);
  const userDaily = daily.filter((metric) => metric.name === name);
  Object.values(userDaily).forEach((metric) => {
    set.push({
      "value": metric.avg
    })
  })
  return set;
}

export default UserAvg;
