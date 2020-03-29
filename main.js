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

setTimeout(function() {
    if (temperatures[2] >= 212) {
        // document.getElementById('boiling').classList.remove(hide);
        console.log('test');
        }
    }, 3000);