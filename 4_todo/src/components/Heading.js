import React from 'react'

function Heading() {
  const date = new Date();
  const day = date.getDay();
  const daysOfTheWeek = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const todaysDate = date.getDate();
  const monthOfTheYear = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  const todaysMonth = date.getMonth();
  
  return(
    <h2>{daysOfTheWeek[day]} {todaysDate} {monthOfTheYear[todaysMonth]}</h2>
  )
}

export default Heading