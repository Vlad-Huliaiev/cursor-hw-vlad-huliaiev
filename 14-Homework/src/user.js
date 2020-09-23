let time = document.getElementById('time');

   function getCurrentTime(dots) {
      var timeString = new Date().toTimeString().replace(/:[0-9]{2,2} .*/, '');
      return dots ? timeString : timeString.replace(/:/, ' ');
   }

   setInterval(
      function() {
         time.innerHTML = getCurrentTime(Math.round(Date.now() / 1000) % 2);
      },
      1000
   );

export default time;