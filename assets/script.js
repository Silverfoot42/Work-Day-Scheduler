var hourX = [$('#hour-9'), $('#hour-10'), $('#hour-11'), $('#hour-12'), $('#hour-13'), $('#hour-14'), $('#hour-15'), $('#hour-16'), $('#hour-17')]
var saveBTN = $('.saveBtn');
var timeBlockId
hourX[0] = 9;
hourX[1] = 10;
hourX[2] = 11;
hourX[3] = 12;
hourX[4] = 13;
hourX[5] = 14;
hourX[6] = 15;
hourX[7] = 16;
hourX[8] = 17;

$(window).on("load", function () {
    
    saveBTN.on('click', function () {
      timeBlockId = $(this).closest(".time-block").attr("id");
      var userInput = $(this).siblings(".description").val();
      localStorage.setItem(timeBlockId, userInput);
    });
    
    var currentHour = dayjs().hour();
    if (currentHour < hourX[0]) {
      $("#hour-9").addClass("future");
      console.log(currentHour < hourX[0]);
    } else if (currentHour > hourX[0]) {
      $("#hour-9").addClass("past");
      console.log(currentHour > hourX[0]);
    } else {
      $("#hour-9").addClass("present");
      console.log(currentHour === hourX[0]);
    }

    if (currentHour < hourX[1]) {
      $("#hour-10").addClass("future");
      console.log(currentHour < hourX[1]);
    } else if (currentHour > hourX[1]) {
      $("#hour-10").addClass("past");
      console.log(currentHour > hourX[1]);
    } else {
      $("#hour-10").addClass("present");
      console.log(currentHour === hourX[1]);
    }

    if (currentHour < hourX[2]) {
      $("#hour-11").addClass("future");
      console.log(currentHour < hourX[2]);
    } else if (currentHour > hourX[2]) {
      $("#hour-11").addClass("past");
      console.log(currentHour > hourX[2]);
    } else {
      $("#hour-11").addClass("present");
      console.log(currentHour === hourX[2]);
    }

    if (currentHour < hourX[3]) {
      $("#hour-12").addClass("future");
      console.log(currentHour < hourX[3]);
    } else if (currentHour > hourX[3]) {
      $("#hour-12").addClass("past");
      console.log(currentHour > hourX[3]);
    } else {
      $("#hour-12").addClass("present");
      console.log(currentHour === hourX[3]);
    }

    if (currentHour < hourX[4]) {
      $("#hour-13").addClass("future");
      console.log(currentHour < hourX[4]);
    } else if (currentHour > hourX[4]) {
      $("#hour-13").addClass("past");
      console.log(currentHour > hourX[4]);
    } else {
      $("#hour-13").addClass("present");
      console.log(currentHour === hourX[4]);
    }

    if (currentHour < hourX[5]) {
      $("#hour-14").addClass("future");
      console.log(currentHour < hourX[5]);
    } else if (currentHour > hourX[5]) {
      $("#hour-14").addClass("past");
      console.log(currentHour > hourX[5]);
    } else {
      $("#hour-14").addClass("present");
      console.log(currentHour === hourX[5]);
    }

    if (currentHour < hourX[6]) {
      $("#hour-15").addClass("future");
      console.log(currentHour < hourX[6]);
    } else if (currentHour > hourX[6]) {
      $("#hour-15").addClass("past");
      console.log(currentHour > hourX[6]);
    } else {
      $("#hour-15").addClass("present");
      console.log(currentHour === hourX[6]);
    }

    if (currentHour < hourX[7]) {
      $("#hour-16").addClass("future");
      console.log(currentHour < hourX[7]);
    } else if (currentHour > hourX[7]) {
      $("#hour-16").addClass("past");
      console.log(currentHour > hourX[7]);
    } else {
      $("#hour-16").addClass("present");
      console.log(currentHour === hourX[7]);
    }

    if (currentHour < hourX[8]) {
      $("#hour-17").addClass("future");
      console.log(currentHour < hourX[8]);
    } else if (currentHour > hourX[8]) {
      $("#hour-17").addClass("past");
      console.log(currentHour > hourX[8]);
    } else {
      $("#hour-17").addClass("present");
      console.log(currentHour === hourX[8]);
    }

    $(".time-block").each(function() {
      var timeID = $(this).attr("id");
      var savedIn = localStorage.getItem(timeID);

      if(savedIn) {
        $(this).find(".description").val(savedIn);
      }
    });

    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D'));
  });