import React, { useState, useEffect } from 'react';
function CurrentTime(){
    const [time, setTime] = useState(getCurrentTime());
    const [T,setDate]=useState(getDate());
  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
      setDate(getDate());
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
    }, []);

  // Function to get current time
  function getDate(){
    const date=new Date();
    const T=date.toLocaleDateString();
    return T;
  }
  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Add leading zeros if necessary
    const formattedHours = (hours < 10 ? '0' : '') + hours;
    const formattedMinutes = (minutes < 10 ? '0' : '') + minutes;
    const formattedSeconds = (seconds < 10 ? '0' : '') + seconds;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <div className='dateAndTime'>
      {time} and date is {T}
    </div>
  );
}


export default CurrentTime;