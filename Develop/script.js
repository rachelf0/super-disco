// Define Variables
var currentTime = moment().format("dddd MMMM Do YYYY, h:mm a");
var currentTimeInt = parseInt(currentTime);
var saveBtn = $(".saveBtn");
$("#currentDay").text(currentTime);

// Set data attributes to each hour input element
$("#9Row").attr("data-time", moment("9:00am", "h:mm a").format("HH"));
$("#10Row").attr("data-time", moment("10:00am", "h:mm a").format("HH"));
$("#11Row").attr("data-time", moment("11:00am", "h:mm a").format("HH"));
$("#12Row").attr("data-time", moment("12:00pm", "h:mm a").format("HH"));
$("#1Row").attr("data-time", moment("1:00pm", "h:mm a").format("HH"));
$("#2Row").attr("data-time", moment("2:00pm", "h:mm a").format("HH"));
$("#3Row").attr("data-time", moment("3:00pm", "h:mm a").format("HH"));
$("#4Row").attr("data-time", moment("4:00pm", "h:mm a").format("HH"));
$("#5Row").attr("data-time", moment("5:00pm", "h:mm a").format("HH"));

$(".saveBtn").on("click",function() {
    var userInput = $(this).siblings("input").val().trim();
    console.log($(this).siblings("input").attr("id"));

    var hour = $(this).siblings("input").attr("id");
    localStorage.setItem(hour, userInput);
})

$("#9Row").val(localStorage.getItem("9Row"));
$("#10Row").val(localStorage.getItem("10Row"));
$("#11Row").val(localStorage.getItem("11Row"));
$("#12Row").val(localStorage.getItem("12Row"));
$("#1Row").val(localStorage.getItem("1Row"));
$("#2Row").val(localStorage.getItem("2Row"));
$("#3Row").val(localStorage.getItem("3Row"));
$("#4Row").val(localStorage.getItem("4Row"));
$("#5Row").val(localStorage.getItem("5Row"));

 // set a variable inputTime to represent the input block's corresponding time with a for loop
 for (var j = 1; j <= 12; j++) {
    var inputTime = $("#" + j + "Row").attr("data-time");
    var inputTimeInt = parseInt(inputTime);
    console.log(inputTimeInt);

    // Set color styling based on comparisons between the currentTimeInt and the inputTimeInt
    if (currentTimeInt === inputTimeInt){
        $("#" + j + "Row").addClass("present");
        
    }

    if (currentTimeInt > inputTimeInt){
        $("#" + j + "Row").addClass("past");
    }

    if (currentTimeInt < inputTimeInt){
        $("#" + j + "Row").addClass("future");
    }

}