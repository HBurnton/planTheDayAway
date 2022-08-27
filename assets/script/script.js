//Get today's date and hour. Hour updates every 5 seconds may change this might be excessive 
var today = moment().format("dddd, MMMM Do");
var thisHour = moment().format("hA");
var hourOffset = 9;


// Big thanks to this Stack Overflow for showing how to do it all in one string
//https://stackoverflow.com/questions/34678098/append-html-block-jquery
for(var i=0; i<=8; i++){
    var hourOfDay = moment(i+hourOffset, 'h').format("hA");
    if(moment(thisHour, 'hA').isAfter(moment(hourOfDay,'hA'))){
        hourColor = "past"
    }else{
    //console.log(moment(thisHour, 'hA').isAfter(moment(hourOfDay,'hA')));
    if(moment(thisHour, 'hA').isSame(moment(hourOfDay,'hA'))){
        hourColor = "present"
    }else{
        hourColor = "future";
    }}

    $('.container').append( "<div class=\"row\" id="+i+"> <div class=\"hour d-flex justify-content-center align-items-center col-md-1\">"+ hourOfDay +"</div><textarea class=\"col-md-10 "+hourColor+"\"></textarea><div class=\"saveBtn col-md-1 align-middle d-flex justify-content-center align-items-center\"><i class=\"fa-solid fa-floppy-disk\"></i></div></div>")
    

}

setInterval(function () {thisHour = moment().format("hA")}, 5000);

$('#currentDay').text(today);

function saveMe(event){
    var button1 = $(event.target);
    console.log(button1.parent().parent().children('textarea').val());
}

$('i').click(saveMe);