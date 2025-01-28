// Q 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.



// var C = 25;
// // var F = 70;
// var F = (C * 9 / 5) + 32;
// // var C = (F - 32) * 5 / 9;

// document.write(C + "°" + "C" + " " + "is" + " " + F + "°" + "F");
// // document.write(F + "°" + "F" + " " + "is" + " " + C + "°" + "C");









// Q : 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables


// var itemPrice1 = 650;
// var quantityItem1 =  3;
// var quantItemPrice1 = itemPrice1 * quantityItem1;


// var itemPrice2 = 100;
// var quantityItem2 = 7;
// var quantItemPrice2 = itemPrice2 * quantityItem2;

// var shippingCharges = 100;

// var totalCost = quantItemPrice1 + quantItemPrice2 + shippingCharges;

// document.write("Price of item 1 is" + " " + itemPrice1 , "<br />");
// document.write("Quantity of item 1 is" + " " + quantityItem1 , "<br />");
// document.write("Price of item 2 is" + " " + itemPrice2 , "<br />");
// document.write("Quantity of item 2 is" + " " + quantityItem2 , "<br />");
// document.write("Shipping Charges is" + " " + shippingCharges , "<br />" , "<br />")
// document.write("Total cost of your order is" + " " + totalCost);

// // console.log(totalCost);






// Q :8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser



// var marks1 = 83;
// var marks2 = 70;
// var marks3 = 57;
// var marks4 = 63;
// var marks5 = 95;

// var totalMarks = 500;

// var obtainedMarks = marks1 + marks2 + marks3 + marks4 + marks5;

// var percentage = (obtainedMarks / totalMarks) * 100;


// document.write("Total Marks:" + " " + totalMarks , "<br />");
// document.write("Marks obtained:" + " " + obtainedMarks , "<br />");
// document.write("Percentage:" + " " + percentage +"%");
// // console.log(percentage)




// Q:9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)



// var dollars = 10;
// var riyals = 25;

// var excDollars = dollars * 104.80;
// var excRiyals = riyals * 28;

// var totalCurrency = excDollars + excRiyals;

// document.write("Total Currency in PKR:" + " " + totalCurrency);







// Q:10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression


// var num = 5;

// // var addNum = num + 5;
// // var mulNum = addNum * 10;
// // var divNum = mulNum / 2;
// var allNum = ((num + 5) * 10) / 2;

// document.write(allNum)




// Q:11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.




// var currYear = 2016;
// var birthYear = 1992;

// var age1 = currYear - birthYear;
// var age2 = age1 - 1;
// document.write("They are either " + age1 + " or " + age2 + " years old.");








// Q:12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)



// var radius = 20;
// var circumference = 2 * 3.142 * 20;
// var area = 3.142 * Math.pow(20 , 2);


// document.write("Radius of a circle:" + " " + radius , "<br />");
// document.write("The circumference is:" + " " + circumference , "<br />");
// document.write("The area is:" + " " + area)




// Q:13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.




var snack = "Chocolate Chip";
var age = 15;
var maxAge = 65;
var perDaySnack = 3;

var totalSnack = (65 - 15) * 3;

document.write("Favourite Snack:" + " " + snack , "<br />");
document.write("Current Age:" + " " + age , "<br />");
document.write("Estimated Maximum Age:" + " " + maxAge , "<br />");
document.write("Amount of Snacks per day:" + " " + perDaySnack , "<br />");
document.write("You will need" + " " + totalSnack + " " + snack + " " + "to last you until the ripe old age of" + " " + maxAge);