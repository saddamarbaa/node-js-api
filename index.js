const _ = require("underscore");
const seedrandom = require("seedrandom");

let total = _.indexOf([1, 2, 3, 4], 2);
let tota2 = _.indexOf([1, 2, 3, 4], 4);

console.log(tota2);
console.log(total);

let rng = seedrandom("hello.");
console.log(rng());
