/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding On console with .this we can see everything in browser what javascript created for that
* 2. Implicit Binding In this principle .this refers to object left of the dot.
* 3. Explicit Binding  with .apply or .call methods pass a new Object
* 4. New Binding   with constructor function we can construct a new object
 *
* write out a code example of each explanation above
*/

// Principle 1
  
// code example for Window Binding

function car (sound){
    console.log(this);
    return sound;
}

car('Vrooooom!');
var carSound='Vrooooom!';

//---------------------------------------------------------------
// Principle 2

// code example for Implicit Binding

let myCusine = {
    name:'Kebab',
    ingredients: 'Lamb meat',
    nameOfthedish: function(){
       // console.log('${this.name} made from ${this.ingredients}');
       console.log(this.name +" made from "+this.ingredients);
    }
}
myCusine.nameOfthedish();
//---------------------------------------------------------------
// Principle 3

// code example for New Binding

function GermanCar(brand){
    this.germanBrand = brand;
}

let myGermanCar = new GermanCar('Mercedes is made in Germany');
console.log(myGermanCar.germanBrand);
//--------------------------------------------------------------------

// Principle 4

// code example for Explicit Binding

function airline () {
    console.log(this.name);
}

let myAirline = {
    name: 'Turkish Airlines',
    airplane: 'Boeing-777' 
}

airline.call(myAirline);