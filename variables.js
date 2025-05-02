// var (Can be Redeclared)
var i = 1;
var i = 2; // ✅ No error, but can cause issues
console.log(i); // Output: 2

// ❌ let (Cannot be Redeclared)

let j = 1;
j = 2; // ✅ Allowed (updating the value)
