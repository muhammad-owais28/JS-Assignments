let magiciansName = ["JAY MARSHALL", "MAX MAVEN", "MASKED MAGICIAN"];
function show_magicians(magicians){
  magiciansName.push(magicians);
  console.log({ ...magiciansName });
};

show_magicians("CAMPBELL McRAE");
