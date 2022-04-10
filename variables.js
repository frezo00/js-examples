// PODJELA JS TIPOVA PODATAKA:

/** PRIMITIVNI TIPOVI PODATAKA:
 * - string
 * - number
 * - boolean
 * - undefined
 * - null* -> spada pod primitivne tipove.
 *            Iako 'typeof null' ispisuje 'object', to je bila greška na početku kreiranja JS jezika, pa ju nisu mogli popravit i tako je ostalo
 */
console.log("***** PRIMITIVE *****");
console.log(typeof "hello"); // string
console.log(typeof 911); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object -> Pogledaj prethodnu napomenu

/** NEPRIMITIVNI:
 * - object
 * - array??? -> Ne, array je isto object
 */
console.log("***** NON-PRIMITIVE *****");
console.log(typeof {}); // object
console.log(typeof { value: "Hello world" }); // object
console.log(typeof []); // object
console.log(typeof ["Hello", 1, true]); // object
