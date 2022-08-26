//Get today's date and hour. Hour updates every 5 seconds may change this might be excessive 
var today = moment().format("dddd, MMMM Do");
var thisHour = moment().format("hA");
var hourOffset = 9;

// Big thanks to this Stack Overflow for showing how to do it all in one string
//https://stackoverflow.com/questions/34678098/append-html-block-jquery
for(var i=0; i<=8; i++){
    var hourOfDay = moment(i+hourOffset, 'h').format("hA");
    hourColor = "past"

    $('.container').append( "<div class=\"row\"> <div class=\"hour col-md-1\">"+ hourOfDay +"</div><textarea class=\"col-md-10 "+hourColor+"\"></textarea><div class=\"saveBtn col-md-1 \">button</div></div>")

}

setInterval(function () {thisHour = moment().format("ha")}, 5000);

$('#currentDay').text(today);