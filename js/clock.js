$(document) .ready( function() {
	
	function displayTime() {

		var currentTime = new Date();

		var hours = currentTime.getHours();

		var minutes = currentTime.getMinutes();

		var seconds = currentTime.getSeconds();

		var clockDiv = document.getElementById("clock");

		
		if (seconds < 10) {

           seconds = "0" + seconds;

		}

		if (hours < 10) {

           hours = "0" + hours;

		}

		if (minutes < 10) {

           minutes = "0" + minutes;

		}

		var meridiem = "AM";

		if (hours > 12) {

			hours = hours - 12;

			meridiem = "PM";
			
		}

		if (hours === 0) {

			hours = 12;

		}
		
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;

	}


	function displayCalender() {

       var currentDate = new Date();

       var month = currentDate.getMonth();

       var date = currentDate.getDate();

       var year = currentDate.getFullYear();

       var calenderDiv = document.getElementById("calender");

       if (month >= 0 ) {

           month = month + 1;

       }

       if (month < 12) {

       	   month = "0" + month;
       }

       if (date < 10) {

          date = "0" + date;

       }

       calenderDiv.innerText = month + "/" + date + "/" + year;

	}

    displayCalender();
    
 
	displayTime();
	setInterval(displayTime, 1000);

});