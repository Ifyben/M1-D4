/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript (uncommented)
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/
console.log("\n---------<Exercise 1>----------") 
let firstFivePositiveNumbers = [0, 1, 2, 3, 4]
console.log("The first five positive numbers are:", firstFivePositiveNumbers) 

/* WRITE YOUR CODE HERE */

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

console.log("\n---------<Exercise 2>--------")
let myData = {
    name: "Ifechukwu Beauty",
    surname: "Azubuike",
    emailAddress: "ifechukwu.azubuike@gmail.com",
    age: 24,
}   
console.log("My Data are as follows:", myData) 

/* WRITE YOUR CODE HERE */

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/
console.log("\n---------<Exercise 3>--------") 
myData.hasDrivingLicense = false
console.log("My updated Data is now:", myData)

/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Remove from the previously created object the age property.
*/
console.log("\n--------<Exercise 4>--------")
delete myData.age
console.log("My Data withouth my age is now:", myData) 

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/ 
let secondData = {
    name: "Favour",
    surname: "Azubuike",
    emailAddress: "favour.azubuike@gmail.com"
}
console.log("The second email is not equal to the first email:", myData !== secondData) 

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 100
if(totalShoppingCart <= 50) 
    totalShoppingCart += 10  //totalShoppingCart = totalShoppingCart + 10
 
   
/* WRITE YOUR CODE HERE */

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/ 
let totalShoppingCart = 100

if(totalShoppingCart <= 50) 
    totalShoppingCart += 10  //totalShoppingCart = totalShoppingCart + 10

let discount = totalShoppingCart * 0.2
totalShoppingCart = totalShoppingCart - discount 
console.log(150, totalShoppingCart)



/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/
console.log("\n----------<Exercise 8>----------") 
let car1 = {
    brand :"Jeep",
    model: 2020,
    licensePlate: "KSC124"
}

let car2 = {
    ...car1,
    licensePlate: "KL35J4199" 
}

let car3 = {
    ...car1,
    licensePlate: "SA335CO"
}

let car4 = {
    ...car1,
    licensePlate: "P688CC"
}

let car5 = {
    ...car1,
    licensePlate: "WOBZK295"
}

console.log("Information about the cars are as follows:", car1, ',', car2, ',', car3, ',', car4, ',', car5)
/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/
console.log("\n----------<Exercise 9>----------") 
let carsForRent = [car1, car2, car3, car4, car5]

console.log("Here are the available cars for rent:", carsForRent) 

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
console.log("\n----------<Exercise 10>----------") 

carsForRent.shift()
carsForRent.pop()

console.log("Remainig cars after the first and the last cars have been rented", carsForRent)

/* WRITE YOUR CODE HERE */

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/
console.log("\n----------<Exercise 11>----------") 
console.log("Here are the available cars for rent:", car.model, car.brand, car.licensePlate) 

/* WRITE YOUR CODE HERE */

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/
console.log("\n----------<Exercise 12>----------") 

let carsForSale = [car1, car3, car4]
let totalCars = {
    carsForSale: carsForSale.length,
    carsForRent: carsForRent.length
}
//console.log("Here are the number of cars present in both cars for sale and cars for rent:", totalCars)



/* WRITE YOUR CODE HERE */

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/
console.log("\n----------<Exercise 13>----------") 

console.log(carsForSale[0].licensePlate) 
console.log(carsForSale[2].licensePlate) 
console.log(carsForSale[3].licensePlate) 


/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/
