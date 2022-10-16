Name = "muhammad owais";
function titleCase(TitleCase) {
  return TitleCase
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
}

UpperCaseWord = Name.toUpperCase();
LowerCaseWord = Name.toLowerCase();

console.log(UpperCaseWord);
console.log(LowerCaseWord);
console.log(titleCase(Name));
