var sports = ["cricket", "foot", "chess"];
console.log(sports);
// let use simplified methode 
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    console.log(sport);
    if (sport == "cricket") {
        console.log("this my favorite sprots " + sport);
    }
    else {
        console.log(sports);
    }
}
