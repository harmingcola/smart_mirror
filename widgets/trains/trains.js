var trainApiUrl = 'http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByNameXML?StationDesc=Howth%20Junction';

updateTrains();

window.setInterval(function(){
    updateTrains();
}, 60000);

function updateTrains() {
    jQuery.get(trainApiUrl, function(data) {
        alert(data);
    });
}