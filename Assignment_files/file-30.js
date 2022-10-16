const username = ["M Owais", "M Hassan","admin", "M Talha","M Ali"];

for (let i = 0; i < username.length; i++) {
  if (username[i] == "admin") {
    console.log(`Hello ${username[i]}, would you like to see some reports`);
  } else {
    console.log(`Hello ${username[i]}, thank you for login`);
  }
}
