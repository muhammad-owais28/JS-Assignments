function Cars(manufacturer, model, options) {
  let Infomation = { manufacturer, model, ...options };
  console.log(Infomation);
};

Cars("Tasla", "2019", { 'Full Name': "Cybertruck", "Price": "Aukat se Bahir" });
