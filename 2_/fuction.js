// function foo() {return 123;}
// console.log(foo());

// function bar(){}
// console.log(bar());

//  รันทำงานได้เลย
// (function foo(){
//     console.log('foo was executed!');
// })();

// var foo = 123;
// if (true){
//     (function foo(){
//         var foo = 456;
//     })();
// }
// console.log(foo); //

// var foo1 = function namedFuction() {
//     console.log('foo1');
// }
// foo1(); 

// var foo2 = function (){
//     console.log('foo2');
// }
// foo2();

// setTimeout(function (){
//     console.log('2000 milliseconds')
// },2000);

// function foo(){
//     console.log('2000 milliseconds')
// }
// setTimeout(foo,2000)

function outerFunction(arg){
    var variableInoutFuction = arg;

    function bar(){
        console.log(variableInoutFuction)
    }
    bar ();
}

outerFunction('hello closure');