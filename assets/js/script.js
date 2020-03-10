// JS by Dan Høegh
// UCN MMD 2020

// Let's create a object. It never change content so we can initialize it with the constant keyword
const jobA = { // use "const job" not "const JobA" during lesson
    title: 'scarer',
    description: 'scare children to extract energy',
    isActive: true,
}

// ------------- 8< ------------- 8< ------------- Cut away below after JobA is done

// Out put it in console first... then in html
console.log(jobA);
document.querySelector('#output').innerHTML += jobA;
// difference in output when you output an object to html or console!

// To get output in HTML from an object, we need to be specific about what we want to output
document.querySelector('#output').innerHTML += jobA.title;
document.querySelector('#output').innerHTML += jobA.description;
document.querySelector('#output').innerHTML += jobA.isActive;

// In console the output is viewable (not [object][object]), we'll get an object to click around in
// This is handy for figuring out where stuff is in the object
console.log(jobA);
console.log(jobA.title);
console.log(jobA.description);
console.log(jobA.isActive);

// ------------- 8< ------------- 8< ------------- Cut away above after JobA is done


// We can add funtions to the object!

const job = {
    title: 'scarer',
    description: 'scare children to extract energy',
    isActive: true,
    // extend job with this function
    showDetails() {
        const status = this.isActive ? 'ongoing' : 'on pause';
        console.log(`The position as ${this.title} means you ${this.description}. It is currently ${status}.`);
    }
}

job.showDetails();

// ^^ Try changing the data in the object and see what happens to the output


// What if we want to create another job, based on the one we already created?

// We can start by copying the current job object, this uses the job object as a template
const assistant = Object.create(job);
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

// When we've got the keys, we can go iterate through them - you can replace 'key' with any variable name you want
Object.keys(assistant).forEach(key => {
    const value = assistant[key];
    console.log(`${key}: ${value}`);
});

// To see how many keys that are in the object we can use .length
const length = Object.keys(assistant).length;
console.log(length);

// Looking at values
// -------------------------------------------

// get all values from an object - Object.values()

const values = Object.values(assistant);
console.log(values);

// Getting the key/value pais of the object into an array - Object.entries()
const entries = Object.entries(assistant);
console.log(entries); // The console looks different for these, this is an array, not an object

// Looping through an array
entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];
    console.log(`${key}: ${value}`)
});

// Combining objects - Object.assign()

const name = {
    firstName: 'Gordon',
    lastName: 'Freeman'
};

const details = {
    job: 'Theoretical physicist',
    employer: 'Black Mesa'
};

console.log(name, details);

const protagonist = Object.assign(name, details);
console.log(protagonist);

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
const objectIsFrozen = Object.isFrozen(antagonist);

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

user.name = 'Tyler';
user.password = 'donttalkaboutit';
user.position = 'The guerilla terrorist of the food service industry';
user.alternatePersonality = 'Narrator'; // Doesn't show up, can't be added due to Object.seal()
console.log(user);