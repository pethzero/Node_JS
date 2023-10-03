// var foo;
// console.log(foo) //undefine

// var foo = {bar:123};
// console.log(foo.bar) //123
// console.log(foo.bas) //undefine

console.log( 5 == '5') // ture
console.log( 5 === '5') // false


console.log( '' == '0') // false
console.log( '' == 0) // ture

console.log( '' === '0') // false
console.log( '' === 0) // false

console.log(null == undefined); //ture
console.log(null === undefined); //false

if(!false)
{
    console.log('falsy')
}

if(!null)
{
    console.log('falsy')
}

if(!undefined)
{
    console.log('falsy')
}