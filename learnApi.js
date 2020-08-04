const API = require("./lib/API")("./lib/db.json");
const readlineSync = require("readline-sync");
const chalk = require("chalk");


//Global variables
let userSelection= 0;
let cars = API.read('cars');
let userSelectedFromCarList = 0;


// API inclusion
//----------------------------------------------------------------
// creating cars through the API create function
    let addNewCar = () => {
        let carMake = readlineSync.question("Type in car make and model");
            let carAdded = API.create('cars', {make: carMake});
            console.log(chalk.green(` ${carAdded } added to the list`));
    }
     

// console.log(API.read('books'));
// console.log(API.read('books', 1)); 
// let newBook = API.read('books', 2);
// console.log(newBook);
// newBook.title = "Long road ahead";
// // console.log(newBook); 
// API.update("books", newBook);
// console.log('books');


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
console.log(chalk.greenBright('Press 7 to replace a car with new one'));
console.log(chalk.blueBright('Press 8 to add a new car to the collection'));
const userSelectedFromCarList = readlineSync.question("Select your car");
    // IF option 8 add a new car selected
    if (userSelectedFromCarList ==8) {
        addNewCar();
    }
console.log("User selected option " + userSelectedFromCarList) // testing only
console.log("type of " + typeof userSelectedFromCarList); // testing only (string)
    
    for (let car of cars) {
        if (userSelectedFromCarList == car.id) {
            console.log(chalk.blueBright(`***You selected ${car.make}***`));
            
        } 
    }
        
    if (userSelectedFromCarList == 6) {
        displayCars(cars);
        let removingCar = readlineSync.question("Which car you want to remove");
        for (let car of cars) {
            // console.log("car of make " + car.make);
            // console.log("car of id " + car.id); testing only
            if (removingCar == car.id) {
                console.log("car id being removed " + car.id);
                let removedCar = API.destroy("cars", car.id);
                console.log("You removed " + car.make);
            }
        }
     } 
        //unable to access object cars ASK Vasile
    if (userSelectedFromCarList == 7) {
        console.log('user selected option 7 to add');
        displayCars(cars);
        let replacedCarIndex = readlineSync.question("Which car do you want to replace");
        console.log(`Car being replaced index is ${replacedCarIndex}`);
        if (replacedCarIndex) {
            // ask user to type in new replacing car make and model
            let newAddCar = readlineSync.question("Provide us make and model of new addition of car");
            console.log(chalk.inverse(newAddCar));
            //updating through API function 
            let carUpdate = API.read("cars", replacedCarIndex);
            carUpdate.make = newAddCar;
            API.update("cars", carUpdate);
        }

    }      
}




