
function getMostVisibleElement(selector) {
    var clientRect = null;
    var clientRectTop = 0;
    var maxVisibleHeight = 0;
    var visibleHeightOfElem = 0;
    var mostVisibleElement = null;
    var skipRest = false;

    var visibleElems = $(selector).each(function (i, element) {
        if (skipRest === false) {
            clientRect = element.getBoundingClientRect();
            clientRectTop = Math.abs(clientRect.top);

            if (clientRect.top >= 0) {
                visibleHeightOfElem = window.innerHeight - clientRectTop;
            } else {
                visibleHeightOfElem = clientRect.height - clientRectTop;
            }

            if (visibleHeightOfElem >= clientRect.height) {
                mostVisibleElement = element;
                skipRest = true;
            } else {

                if (visibleHeightOfElem > maxVisibleHeight) {
                    maxVisibleHeight = visibleHeightOfElem;
                    mostVisibleElement = element;
                }
            }

        }
    });
    return mostVisibleElement;
}

var x = "";
var mostVisibleSaveLast = null;

//$(window).load(function () { // VERSION 2.1.1
    $(window).on('load',function () { // IF using .ready then sometimes it shows many enabled views same time at side menu

    var mostVisible = getMostVisibleElement('.my-container');

    x = document.getElementsByClassName("b" + mostVisible.id);
    $(x).addClass('active');

    //   alert("Page is loaded");
    //console.log("testtest   "+x);
});

$(window).scroll(function () {
    var mostVisible = getMostVisibleElement('.my-container');
    x = document.getElementsByClassName("b" + mostVisible.id);


    if (mostVisibleSaveLast != x) {

        $(mostVisibleSaveLast).removeClass('active');
        mostVisibleSaveLast = x;

        x = document.getElementsByClassName("b" + mostVisible.id);
        $(x).addClass('active');



    }

});
