/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
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