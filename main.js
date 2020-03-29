// It is always helpful to use comments in your code!

var tempList = function() {
    $('boiling-temp').innerHTML = tempList[0];
    document.getElementById('freezing-temp').innerHTML = tempList[1];
    document.getElementById('water-temp').innerHTML = tempList[2];
};

tempList(["212", "32", "13"]);