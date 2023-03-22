export const formatDate = (date) =>
  new Date(date).toLocaleString("en-GB", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default formatDate;
