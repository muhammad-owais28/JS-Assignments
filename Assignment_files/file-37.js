function shirt(size, msg) {
  if (size == "xl" || size == "md") {
    console.log("Shirt Size is - ", size);
    console.log("Message on shirt -  I love Javascript");
  } else {
    console.log("Shirt Size is - ", size);
    console.log("Message on shirt - ",msg);
  }
};

shirt("sm", "Let's Code");
