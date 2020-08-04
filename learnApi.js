const API = require("./lib/API")("./lib/db.json");
const readlineSync = require("readline-sync");
const chalk = require("chalk");

// API inclusion
//----------------------------------------------------------------
// creating cars through the API create function
    // API.create('cars', {make: "Ford focus"});

// console.log(API.read('books'));
// console.log(API.read('books', 1)); 
// let newBook = API.read('books', 2);
// console.log(newBook);
// newBook.title = "Long road ahead";
// // console.log(newBook); 
// API.update("books", newBook);
// console.log('books');

let userSelection= 0;
let cars = API.read('cars');

// displaying cars
let displayCars = (cars) => {
    for (let car of cars ) {
        console.log(`${car.id}: ${car.make}`)
    }

}
/// main menu function
const categories = ["Cars", "People carriers"];
// let userSelection= 0; scoped globally line 19 
const topMenu = () => {
    console.log(chalk.yellowBright('***********************'));
    console.log(chalk.redBright("* Hire our vehicles   *"));
    console.log(chalk.yellowBright('***********************'))
  let categorySelected = readlineSync.keyInSelect(
    categories,
    "Choose your option"
  );
     userSelection= categorySelected + 1;
  console.log("User selected option no: " + userSelection); //for testing only

  if (userSelection === 1) {
    //   let cars = API.read('cars'); scoped global line 20
      displayCars(cars);

  } else if (userSelection == 2) {
    console.log(chalk.redBright('Sorry fully booked'));
}

};

// invoking topMenu function
topMenu();


// let user to select a car
if (userSelection == 1) {
    //Update the stock
console.log(chalk.red('Press 6 to remove a car'));
console.log(chalk.greenBright('Press 7 to add a car'));
const userSelectedFromCarList = readlineSync.question("Select your car");
console.log("User selected option " + userSelectedFromCarList) // testing only
console.log("type of " + typeof userSelectedFromCarList); // testing only (string)
    for (let car of cars) {
        if (userSelectedFromCarList == car.id) {
            console.log(chalk.blueBright(`***You selected ${car.make}***`));
            
        } 
    }
        //unable to access object cars ASK Vasile
    if (userSelectedFromCarList == 6) {
        displayCars(cars);
        let removingCar = readlineSync.question("Which car you want to remove");
        for (let car of cars) {
            // console.log("car of make " + car.make);
            // console.log("car of make " + car.id); testing only
            if (removingCar == car.id) {
                console.log("car id being removed " + car.id);
                let removedCar = API.destroy(cars, car.removingCar);
                console.log("You removed " + removedCar);
            }
        }
     } 
        //unable to access object cars ASK Vasile
    if (userSelectedFromCarList == 7) {
        console.log('user selected option 7 to add');
        let newCar = readlineSync.question("write a new car's make");
        if (newCar !== undefined && newCar === "string") {
            console.log(`New car being added is ${newCar}`);
            let carUpdate = API.read("cars", 5);
            carUpdate.make = newCar;
            API.update("cars", carUpdate);
        }

    }      
}



