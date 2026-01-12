//!What is Closure in Javascript?
//?A function along with reference to its outer environment together forms a closure.

function outer() {
    var a = 10;
    function inner() {
        console.log(a);
    } // inner forms a closure with outer
    return inner;
}
outer()(); // 10 

//? over here first `()` will return inner function and then using second `()` to call inner function

//! (with closures) -> put everything into a function
function counter() {
    var count = 0;
    function increment() {
        count++;
    }
}
console.log(count);
/**this will give referenceError as count can't be
accessed. So now we are able to achieve hiding of data */


