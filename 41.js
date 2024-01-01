// Object Destructuring
const band = {
    bandName: "led zepplin",
    famouseSong: "stairway to heaven",
    anotherFamourSong: "kashmir",
    year: 1961
};

// --> Tough way to access the value of the key in variable.

// const bandName = band.bandName;
// const famouseSong = band.famouseSong;

// console.log(bandName, famouseSong);

// --> Easy way to access the value of the key in the variable using the array destructuring.
// let {bandName, famouseSong} = band;
// bandName = "SSB Band";
// famouseSong = "Jan gan man..";

// console.log(bandName);
// console.log(famouseSong);

// --> To give an different name to the key.
// let {bandName: var1, famouseSong: var2} = band;

// console.log(bandName); --> undefined
// console.log(var1);

// --> to tack the remaining key value pair into the different object.
let {bandName, famouseSong, ...restProps} = band;
console.log(restProps);