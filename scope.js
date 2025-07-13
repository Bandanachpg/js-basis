// // scope
// // variable declaration
// // var,let, const,

// // ? scope is the context in which variables are defined and accessed.
// // 1. global scope
// // 2. block scope
// // 3. function scope( local scope)
// // 4. lexical scope

// // ! global scope
// // ? global scope is accessible from anywhere in the code
// let global_let = 'I am global';
// const global_const = 'I am also global';
// var global_var = 'I am a global variable';


// console.log(global_let);
// console.log(global_const);
// console.log(global_var);


// console.log("global", block_let);
//     console.log("global", block_const);
//     console.log("global", block_var);

// // ! block scope
// // ? block scope is created by curly braces { } in control structures like if, for, while

// if (true) {

//     let block_let ="block let";
//     const block_const = "block const";
//     var block_var = "block var"; 

//    // console.log("block", block_let);
//    // console.log("block", block_const);
//     console.log("block", block_var);
// }

// // ! function scope
// // ? function scope (local scope) is created by function declarations and is only accessible within that function
// function scope () {
//     let function_let ="function_let";
//     const function_const = "function const";
//     var function_var = "function var";




//     console.log("function", function_let);
//     console.log("function", function_const);
//     console.log("function", function_var);
// }

// scope();

// // console.log("global", block_var);
// // console.log("global", block_const);
// console.log("global", block_var);


// ! lexical scope
// ? lexical scope is determined by the location of variables and blocks in the code and is preserved even when functions are executed outside their original scope


funtion parent () 
{
    const parent_var = 'parent'
    console.log("child_var)

    function child() {
        console.log("child", child_var);
    }
    const child_var = "children";
    console.log('child', parent_var)
    console.log('child', child_var)

    }
    child()
}

parent()