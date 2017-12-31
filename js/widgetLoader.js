
activeWidgets.forEach(function (widgetName) {
    var htmlLocation = "widgets/" + widgetName + "/" + widgetName + ".html";

    jQuery.get(htmlLocation, function(data) {
        $('#container').append(data);
    });


});

