let magiciansName = ["JAY MARSHALL", "MAX MAVEN", "MASKED MAGICIAN"];
function show_magicians(magicians){
  magicians.forEach((name) => console.log(name));
  const NewArray = magicians.map((name) => `${name} GREAT`);
  console.log({ NewArray });
};

show_magicians(magiciansName);
