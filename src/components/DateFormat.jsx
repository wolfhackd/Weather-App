import React from "react";
import { useEffect, useState } from "react";

const DateFormat = () => {
  const [hour, setHour] = useState(null);
  const [dayString, setDayString] = useState(null);
  const [dayNumber, setDayNumber] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  useEffect(() => {
    function getCurrentHours() {
      const date = new Date();
      const currentHour = `${date.getHours()}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
      setHour(currentHour);
    }

    function getCurrentDate() {
      const date = new Date();

      const day = date.getDay();
      const weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      setDayString(weekDays[day]);

      const monthString = date.getMonth();
      const shortMonths = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      setMonth(shortMonths[monthString]);
      setDayNumber(date.getDate());
      setYear(date.getFullYear().toString().slice(2, 4));
    }

    getCurrentDate();
    const interval = setInterval(() => {
      getCurrentHours();
    }, 10000);

    return () => clearInterval(interval);
  });

  return <div>{`${hour} - ${dayString}, ${dayNumber} ${month} ‘${year}`}</div>;
};

export default DateFormat;
