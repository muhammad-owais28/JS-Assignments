let guest = ["Ali Raza", "M Hassan", "M Talha", "M Akif"];

for (let guests of guest) {
  console.log(`${guests}, Let's have Dinner Tonight.`);
}
console.log(`${guest[2]} can't available for dinner.`);

// Remove Talha
guest.splice(2,1);
// Adding Moiz
guest.push("Moiz");

for (let guests of guest) {
  console.log(`${guests}, Let's have Dinner Tonight.`);
}