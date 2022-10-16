let car = {
    "name":"civic",
    "model":"2021",
    "engine":"1799cc",
    "airbags":"Yes",
    "price":4000000,
    "child_lock	":"Yes",
    "Sunroof":"No",
    "tachometer":"No",
    "Rear Camera":"No",
    "Horse Power":"138HP",
};
console.log(car.name == "civic");
console.log(car.model == "2022");
console.log(car.engine == "1799cc");
console.log(car.airbags == "No");
console.log(car.price >= 3990000);
console.log(car.child_lock == "No");
console.log(car.Sunroof == "No");
console.log(car.tachometer == "Yes");
console.log(car["Rear Camera"] == "No");
console.log(car["Horse Power"] == "139HP");