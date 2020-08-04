const API = require("./lib/API")("./lib/db.json");
// import { keyInSelect } from "readline-sync";
// import { greenBright, red, blue } from "chalk";
const readlineSync = require("readline-sync");
const chalk = require("chalk");

//Your code goes here!

let selectedItems = {
    book: "",
    movie: "",
    nextTrip: "",
  };

const movies = [
    "The Invisible Man",
    "Never Rarely Sometimes Always",
    "Gretel & Hansel",
    "No time to die",
    "Bloodshot",
    "Onward",
    "Sonic",
  ];
  
  const books = [
    "My Dark Vanessa",
    "Uncanny Valley",
    "Weather",
    "The night watchman",
    "All adults here",
    "Dear Edward",
    "Grown ups",
  ];
  
  const countries = [
    "Italy",
    "France",
    "Germany",
    "Spain",
    "Portugal",
    "Denmark",
    "Netherland",
    "United Kingdom",
    "Pakistan",
  ];


/// main menu function
const categories = ["Books", "Movies", "Next destination"];
let userSelectionMatch = 0;
const topMenu = () => {
  let categorySelected = readlineSync.keyInSelect(
    categories,
    "Choose your option"
  );
     userSelectionMatch = categorySelected + 1;
  console.log("User selected option no: " + userSelectionMatch); //for testing only

};

topMenu();


// // connecting main menu to books/movies/countries option by invoking their functions 
// if (userSelectionMatch <= categories.length && userSelectionMatch == 1) {
//   renderBooksList();
// } else if (userSelectionMatch <= categories.length && userSelectionMatch == 2) {
//   renderMoviesList();
// } else if (userSelectionMatch <= categories.length && userSelectionMatch == 3) {
//   renderCountriesList();
// }


//   // displaying books
const renderBooksList = () => {
	const selectedBookIndex = readlineSync.keyInSelect(
	  [...books, "Go to main menu"],
	  "Please select a Book by its number"
  );
  // console.log('selected book index ' + selectedBookIndex);	testing
  
	if (selectedBookIndex !== books.length) {
    selectedItems.book = books[selectedBookIndex];
    console.log('Your are going to read ' + chalk.greenBright(selectedItems.book))
	} else {
	  topMenu();
	}
  };
  // connecting main menu to books option by invoking their functions 
  if (userSelectionMatch <= categories.length && userSelectionMatch == 1) {
    renderBooksList();
  } 


// displaying movies
const renderMoviesList = () => {
	const selectedMoviesIndex = readlineSync.keyInSelect(
	  [...movies, "Go to main menu"],
	  "Please select a Movie by its number"
  );
  console.log('Movie arrays length ' + movies.length);
	console.log('selected movies index ' + selectedMoviesIndex);	
	if (selectedMoviesIndex !== movies.length) {
    selectedItems.movie = movies[selectedMoviesIndex];
    console.log('Your are going to watch movie ' + chalk.red(selectedItems.movie));
	} else {
	  topMenu();
	}
  };
  // connecting main menu to movies option by invoking their functions 
  if (userSelectionMatch <= categories.length && userSelectionMatch == 2) {
    renderMoviesList();
  } 

// // displaying countries
const renderCountriesList = () => {
	const selectedCountriesIndex = readlineSync.keyInSelect(
	  [...countries, "Go to main menu"],
	  "Please select a country by its number"
	);
	console.log('selected countries index ' + selectedCountriesIndex);	
	if (selectedCountriesIndex !== countries.length) {
    selectedItems.nextTrip = countries[selectedCountriesIndex];
    console.log("You are traveling to " + chalk.blue(selectedItems.nextTrip));    
	} else {
	  topMenu();
	}
  };
  // connecting main menu to countries option by invoking their functions 
  if (userSelectionMatch <= categories.length && userSelectionMatch == 3) {
    renderCountriesList();
  }



