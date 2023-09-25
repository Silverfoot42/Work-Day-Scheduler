var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour13 = $('#hour-13');
var hour14 = $('#hour-14');
var hour15 = $('#hour-15');
var hour16 = $('#hour-16');
var hour17 = $('#hour-17');
var saveBTN = $('.saveBtn');
hour9 = 9;
hour10 = 10;
hour11 = 11;
hour12 = 12;
hour13 = 13;
hour14 = 14;
hour15 = 15;
hour16 = 16;
hour17 = 17;

$(window).on("load", function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    saveBTN.on('click', function () {
      var scheduleInput = document.getElementById
      localStorage.setItem("hour-9", scheduleInput.val());
    });
    
    var currentHour = dayjs().hour();
    if (currentHour < hour9) {
      $("#hour-9").addClass("future");
      console.log(currentHour < hour9);
    } else if (currentHour > hour9) {
      $("#hour-9").addClass("past");
      console.log(currentHour > hour9);
    } else {
      $("#hour-9").addClass("present");
      console.log(currentHour === hour9);
    }

    if (currentHour < hour10) {
      $("#hour-10").addClass("future");
      console.log(currentHour < hour10);
    } else if (currentHour > hour10) {
      $("#hour-10").addClass("past");
      console.log(currentHour > hour10);
    } else {
      $("#hour-10").addClass("present");
      console.log(currentHour === hour10);
    }

    if (currentHour < hour11) {
      $("#hour-11").addClass("future");
      console.log(currentHour < hour11);
    } else if (currentHour > hour11) {
      $("#hour-11").addClass("past");
      console.log(currentHour > hour11);
    } else {
      $("#hour-11").addClass("present");
      console.log(currentHour === hour11);
    }

    if (currentHour < hour12) {
      $("#hour-12").addClass("future");
      console.log(currentHour < hour12);
    } else if (currentHour > hour12) {
      $("#hour-12").addClass("past");
      console.log(currentHour > hour12);
    } else {
      $("#hour-12").addClass("present");
      console.log(currentHour === hour12);
    }

    if (currentHour < hour13) {
      $("#hour-13").addClass("future");
      console.log(currentHour < hour13);
    } else if (currentHour > hour13) {
      $("#hour-13").addClass("past");
      console.log(currentHour > hour13);
    } else {
      $("#hour-13").addClass("present");
      console.log(currentHour === hour13);
    }

    if (currentHour < hour14) {
      $("#hour-14").addClass("future");
      console.log(currentHour < hour14);
    } else if (currentHour > hour14) {
      $("#hour-14").addClass("past");
      console.log(currentHour > hour14);
    } else {
      $("#hour-14").addClass("present");
      console.log(currentHour === hour14);
    }

    if (currentHour < hour15) {
      $("#hour-15").addClass("future");
      console.log(currentHour < hour15);
    } else if (currentHour > hour15) {
      $("#hour-15").addClass("past");
      console.log(currentHour > hour15);
    } else {
      $("#hour-15").addClass("present");
      console.log(currentHour === hour15);
    }

    if (currentHour < hour16) {
      $("#hour-16").addClass("future");
      console.log(currentHour < hour16);
    } else if (currentHour > hour16) {
      $("#hour-16").addClass("past");
      console.log(currentHour > hour16);
    } else {
      $("#hour-16").addClass("present");
      console.log(currentHour === hour16);
    }

    if (currentHour < hour17) {
      $("#hour-17").addClass("future");
      console.log(currentHour < hour17);
    } else if (currentHour > hour17) {
      $("#hour-17").addClass("past");
      console.log(currentHour > hour17);
    } else {
      $("#hour-17").addClass("present");
      console.log(currentHour === hour17);
    }
    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    localStorage.getItem("description");

    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D'));
  });