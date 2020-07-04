import { MONTHS, DAYS } from "./constants";

export const fetchData = (path) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location${path}`
    )
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export const getDateString = (date) => {
  const dateObject = new Date(date);
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 86400000);
  let result = "";
  if (dateObject.getDate() === today.getDate()) {
    result += `Today`;
  } else if (dateObject.getDate() === tomorrow.getDate()) {
    result += `Tomorrow`;
  } else {
    result += `${DAYS[dateObject.getDay()]}`;
  }
  result += `, ${dateObject.getDate()} ${
    MONTHS[dateObject.getMonth()]
  } ${dateObject.getFullYear()}`;
  return result;
};

export const fixedNumber = (num) => num.toFixed(1);

export const milesToKm = (miles) => fixedNumber(miles * 1, 609344);

export const mphToKmh = (mph) => fixedNumber(mph * 1.61);

export const getTimeString = (timeString) => {
  const index = timeString.indexOf("T");
  return timeString.slice(index + 1, index + 6);
};
