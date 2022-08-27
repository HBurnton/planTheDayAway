//Get today's date and hour. Hour updates every 5 seconds may change this might be excessive 
var today = moment().format("dddd, MMMM Do");
var thisHour = moment().format("hA");
var hourOffset = 9;
var tasks = Array(9).fill('');

//set text at top to current day
$('#currentDay').text(today);

//function checks for prior stored tasks and if so, sets tasks equal to them
function loadPriorTasks() {
    var storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks !== null) {
        tasks = storedTasks;
    }
}

for (var i = 0; i <= 8; i++) {

    loadPriorTasks();//loads tasks

    var hourOfDay = moment(i + hourOffset, 'h').format("hA");

    //compares this current hour to the hour of day that is being crated in row and sets color depending on relationship. 
    if (moment(thisHour, 'hA').isAfter(moment(hourOfDay, 'hA'))) {
        hourColor = "past";
    } else if (moment(thisHour, 'hA').isSame(moment(hourOfDay, 'hA'))) {
        hourColor = "present";
    } else {
        hourColor = "future";
    }

    /*
    This bad boy puts everything together. Makes row with unique ids, sets the hour color and places content of textarea boxes.

    Big thanks to this Stack Overflow for showing how to do it all in one string
    https://stackoverflow.com/questions/34678098/append-html-block-jquery
    */
    $('.container').append("<div class=\"row\" id=" + i + "> <div class=\"hour d-flex justify-content-center align-items-center col-md-1\">" + hourOfDay + "</div><textarea class=\"col-md-10 " + hourColor + "\">" + tasks[i] + "</textarea><div class=\"saveBtn col-md-1 align-middle d-flex justify-content-center align-items-center\"><i class=\"fa-solid fa-floppy-disk\"></i></div></div>")


}

    //Gets event target, finds the parent row and uses id as index to store row's child text area content. Stringify and save array as 'tasks'
function saveMe(event) {
    var button1 = $(event.target);
    var row = button1.parent().parent();
    tasks[Number(row.attr('id'))] = row.children('textarea').val(); 
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//event listener on the save icon triggers SaveMe function
$('i').click(saveMe);

//setInterval(function () { thisHour = moment().format("hA") }, 5000); Maybe going to live update color at some point?