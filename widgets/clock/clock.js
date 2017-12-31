updateTime()

window.setInterval(function(){
    updateTime()
}, 5000);

function updateTime() {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var d = new Date();
    var day = days[d.getDay()];
    var hr = d.getHours();
    var min = d.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }
    var date = d.getDate();
    var month = months[d.getMonth()];
    var year = d.getFullYear();

    $('#timeContainer').html(hr + ":" + min);
    $('#dateContainer').html(day + " " + date + " " + month + " " + year);
}