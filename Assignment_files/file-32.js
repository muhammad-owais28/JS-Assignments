const current_user = ["Ali", "Saima", "Maheen", "Owais","Hassan"];
const new_users = ["Owais","Owais123","Saima","Saima123","Maheen"];

new_users.forEach((users) => {
  if (current_user.includes(users)) {
    console.log(`user already exist ${users}`);
  } else {
    console.log(`username available ${users}`);
  }
});
