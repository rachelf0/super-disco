// Define Variables
var currentTime = moment().format("HH");
var currentTimeInt = parseInt(currentTime);
var saveBtn = $(".saveBtn");

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