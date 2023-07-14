// console.log("hello Node.JS");

// var x = 10;
// var str = "thanadol";

// console.log(x);
// console.log(str);

// var arr = [10,20,30];

// console.log(arr);
// console.log(arr.length);

// var obj = {
//     id:100,
//     name:'Node',
//     price:800
// }

// console.log(obj.id);
// console.log(obj.name);
// console.log(obj.price);

// var book1 = {
//     id:100,
//     price:800,
//     name:'Node.JS Basic'
// }

// var book2 = {
//     id:200,
//     price:800,
//     name:'Angular Advanced'
// }

// var arr = [book1,book2]

// console.log(arr.length);
// console.log(arr[0])
// console.log(arr[1])

// var arr = [ {
//     id:100,
//     price:800,
//     name:'Node.JS Basic'
// },{
//     id:200,
//     price:800,
//     name:'Angular Advanced'
// }]

// console.log(arr.length);
// console.log(arr[0])
// console.log(arr[1])

// console.log(10+5);
// console.log(10-5);
// console.log(10*5);
// console.log(10/5);
// console.log(10%5);

// for (var i=0; i<=10;i++)
// {
//     console.log(i)
// }

var arr = [1,3,5,7,9,11] 

for (var i = 0; i < arr.length;i++)
{
    console.log(arr[i]);
}
console.log("--------------------");
for (var item in arr)
{
    console.log(item);
}
console.log("--------------------");
arr.forEach(item =>{
    console.log(item);
})