let guest = ["Ali Raza", "M Hassan", "M Talha", "M Akif"];

guest.unshift("Ali","Usman");


for (const guests of guest) {
  console.log(`${guests}, Let's have Dinner Tonight.`);
}

console.log("Sorry, You can invite more than two people.");

while (guest.length > 2) {
  let guests = guest[guest.length - 1];
  console.log(`Sorry ${guests}, We will have dinner another day.`);
  guest.pop();
}

for (const guests of guest) {
  console.log(`${guests}, Let's have Dinner Tonight.`);
}
