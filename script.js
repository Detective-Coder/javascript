let movieArray = ["Silence of the Lambs", "Girl with the Dragon Tattoo", "Prisoners"];

let silenceOfTheLambs = {
  title: "Silence of the Lambs",
  director: {
    name: "Jonathan Demme",
    yearBorn: 1973
  },
  yearMade: "1995",
  cast: ["Anthony Hopkins", "Jodie Foster"],
}

console.log(silenceOfTheLambs.director.name);

let aaronObject = {
  firstName: "Aaron",
  lastName: "Frankenfield",
  age: 37,
  likesToTravel: true,
  favoriteMovies: movieArray
}

console.log(aaronObject);
console.log(aaronObject.firstName);
console.log(aaronObject.lastName);
console.log(aaronObject.age);
console.log(aaronObject.likesToTravel);



