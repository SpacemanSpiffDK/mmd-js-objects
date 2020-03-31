// JS by Dan Høegh
// UCN MMD 2020

// Let's create a object. It never change content 
// so we can initialize it with the constant keyword
let jobA = { // use "let job" not "let JobA" during lesson
    title: 'scarer',
    description: 'scare children to extract energy',
    isActive: true,
}

// ------------- 8< ------------- Cut away below after JobA is done

// Out put it in console first... then in html
console.log(jobA);
document.querySelector('#output').innerHTML += jobA;
// difference in output when you output an object to html or console!

// To get output in HTML from an object, we need 
// to be specific about what we want to output
document.querySelector('#output').innerHTML += jobA.title;
document.querySelector('#output').innerHTML += jobA.description;
document.querySelector('#output').innerHTML += jobA.isActive;

// In console the output is viewable 
// (not [object][object]), we'll get an object to click around in
// This is handy for figuring out where stuff is in the object
console.log(jobA);
console.log(jobA.title);
console.log(jobA.description);
console.log(jobA.isActive);

// ------------- 8< ------------- Cut away above after JobA is done


// We can add a funtion to the object
// (which is called a method, because it belongs to an object)
// Read more here: https://medium.com/predict/javascript-functions-vs-methods-and-other-helpful-tips-e58a621b1d27

let job = {
    title: 'scarer',
    description: 'scare children to extract energy',
    isActive: true,
    // extend job with this function
    showDetails() {
        let status = this.isActive ? 'ongoing' : 'on pause';
        console.log(`The position as ${job.title} means you ${job.description}. It is currently ${status}.`);
    }
}

job.showDetails();

// ^^ Try changing the data in the object 
// and see what happens to the output


// What if we want to create another job, 
// based on the one we already created?

// We can start by copying the current job object,
// this uses the job object as a template
let assistant = Object.create(job);
// assistant.showDetails(); // <== test the new object with this line 

// We use the job objects values as default values, but we can change those
assistant.title = 'scarer assistant';
assistant.description = 'help the scarers scare children';
assistant.isActive = false;
assistant.showDetails();

// You can list the keys in the object - Object.keys()
let keys = Object.keys(assistant);
console.log(keys);

// we can extend the object with new keys/values
assistant.test = 'something';
console.log(assistant.test);

// Is the new key added?
keys = Object.keys(assistant);
console.log(keys);

// When we've got the keys, we can go iterate through them
// - you can replace 'key' with any variable name you want
Object.keys(assistant).forEach(key => {
    let value = assistant[key];
    console.log(`${key}: ${value}`);
});

// To see how many keys that are in the object we can use .length
let length = Object.keys(assistant).length;
console.log(length);

// Looking at values
// -------------------------------------------

// get all values from an object - Object.values()

let values = Object.values(assistant);
console.log(values);

// Getting the key/value pais of the object into an array - Object.entries()
let entries = Object.entries(assistant);
console.log(entries); 
// ^^ The console looks different for these,
// ^^ this is an array, not an object

// Looping through an array
entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];
    console.log(`${key}: ${value}`)
});

// Combining objects - Object.assign()
let name = {
    firstName: 'Gordon',
    lastName: 'Freeman'
};
let details = {
    job: 'Theoretical physicist',
    employer: 'Black Mesa'
};
console.log(name);
console.log(details);
// combine the two into one new object
let protagonist = Object.assign(name, details);
console.log(protagonist);

// create a function inside an object and use "this"
// instead of the variable name of that object 
let newProtagonist = {
    firstName: 'Alyx',
    lastName: 'Vance',
    fullName: function(){ 
        // here we create method (it's called a 
        // method when it's attached to an object)
        // Read more here: https://medium.com/predict/javascript-functions-vs-methods-and-other-helpful-tips-e58a621b1d27
        return `${this.firstName} ${this.lastName}`;
        // In a method, "this" refers to the "owner" of the method 
        // (in this case it is the object "newProtagonist")
    }
}
console.log(newProtagonist.fullName()); 
// ^^ try it without the parenthesis in .fullName()

// locking objects is also possible - Object.freeze() & Object.seal()
// freeze prevents modification of values and prevents adding and removing keys
let antagonist = {
    name: 'GLaDOS',
    weapon: 'Sarcasm'
}

// freeze the object
antagonist = Object.freeze(antagonist);

// try to change a value and add a key
antagonist.name = 'Wheatley';
antagonist.weapon = 'Stupidity';
antagonist.purpose = 'Stopping GLaDOS from being too smart';

console.log(antagonist);

// you can test if an object is frozen by using Object.isFrozen() (boolean)
let objectIsFrozen = Object.isFrozen(antagonist);
console.log(`Is frozen: ${objectIsFrozen}`);

// Can be used like this, so you don't try to change values in a frozen object
// if (!objectIsFrozen){
//     antagonist.name = 'Wheatley';
//     antagonist.weapon = 'Stupidity';
//     antagonist.purpose = 'Stopping GLaDOS from being too smart';
//     console.log(antagonist);
// }

// sealing prevents adding new keys, but allows modification of existing values
let user = {
    name: 'Narrator',
    password: 'icantsleep',
    position: 'Inspects car accidents to determine if an automobile model should be recalled'
};
console.log(user);

// seal the object
user = Object.seal(user);

// try changing values to exisitng keys
user.name = 'Tyler';
user.password = 'donttalkaboutit';
user.position = 'The guerilla terrorist of the food service industry';
// try adding a key: Can't be added due to Object.seal()
user.alternatePersonality = 'Narrator'; 
console.log(user);

// there are automatically generated objects, i.e.: window, document

console.log('window - The browser ----------------------');
console.log(window);
console.log(window.innerWidth);
console.log(window.innerHeight);

console.log('document - The HTML DOM ----------------------');
console.log(document);