// It is always helpful to use comments in your code!
// var tempList = (temperatures) => document.getElementById('boiling-temp').innerHTML = temperatures[0];
// const tempList = (temperatures) => document.getElementById('freezing-temp').innerHTML = temperatures[1];
// let tempList = (temperatures) => document.getElementById('current-temp').innerHTML = temperatures[2];


var tempList = function(temperatures) {
    document.getElementById('boiling-temp').innerHTML = temperatures[0];
    document.getElementById('freezing-temp').innerHTML = temperatures[1];
    document.getElementById('water-temp').innerHTML = temperatures[2];
};

tempList(["212", "32", "13"]);


var waterTemp = temperatures[2];

setTimeout(function() {
    if (waterTemp >= 212) {
        document.getElementById('boiling').classList.remove(hide);
        document.getElementById('boiling').classList.add(show);
        }  
        else if (waterTemp <= 32) {
            document.getElementById('frozen').classList.remove(hide);
            document.getElementById('frozen').classList.add(show);
        } 
        else {
            document.getElementById('water-temp').classList.remove(hide);
            document.getElementById('water-temp').classList.add(show);
        }
    }, 3000); 