var reviews = [5, 5, 4.5, 6.7, 5, 4, 3, 2];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log(total);
console.log(average);
