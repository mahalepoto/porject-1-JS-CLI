const API = require("./lib/API")("./lib/db.json");
const readlineSync = require("readline-sync");

// Your code goes here!

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

  const topMenu = () => {
    const categories = ["Books", "Movies", "Next destination"];
    let categoryIndex = readlineSync.keyInSelect(
      categories,
      "Choose your option"
    );
    let toMatchIndex = categoryIndex + 1;
    //console.log("categories index " + toMatchIndex); for testing only
  
  };
  
  topMenu();


  // displaying books
const renderBooksList = () => {
	const selectedBookIndex = readlineSync.keyInSelect(
	  [...books, "Go to main menu"],
	  "Please select a Book by its number"
	);
	console.log('selected book index ' + selectedBookIndex);	
	if (selectedBookIndex !== books.length) {
	  selectedItems.book = books[selectedBookIndex-1];
	} else {
	  topMenu();
	}
  };
console.log(renderBooksList());

// displaying movies
const renderMoviesList = () => {
	const selectedMoviesIndex = readlineSync.keyInSelect(
	  [...movies, "Go to main menu"],
	  "Please select a Book by its number"
	);
	console.log('selected movies index ' + selectedMoviesIndex);	
	if (selectedMoviesIndex !== books.length) {
	  selectedItems.movies = movies[selectedMoviesIndex - 1];
	} else {
	  topMenu();
	}
  };
console.log(renderMoviesList());

// displaying countries
const renderCountriesList = () => {
	const selectedCountriesIndex = readlineSync.keyInSelect(
	  [...countries, "Go to main menu"],
	  "Please select a Book by its number"
	);
	console.log('selected countries index ' + selectedCountriesIndex);	
	if (selectedCountriesIndex !== countries.length) {
	  selectedItems.countries = countries[selectedCountriesIndex - 1];
	} else {
	  topMenu();
	}
  };
console.log(renderCountriesList());