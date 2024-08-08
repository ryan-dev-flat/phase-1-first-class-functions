//The `receivesAFunction` function should:

 /* - take a _callback function_ as an argument
  - call the callback function
  - it doesn't matter what this function returns, so long as it calls the
    callback function

- The `returnsANamedFunction` function should:

  - take no arguments
  - return a _named function_

- The `returnsAnAnonymousFunction` function should:
  - take no arguments
  - return an _anonymous function_

When you're done, remember to commit and push your changes up to GitHub, then
submit your work to Canvas using CodeGrade. */

function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    return function namedFunction() {}
}


function returnsAnAnonymousFunction() {
    return function() {}
}
