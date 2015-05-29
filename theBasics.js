// Let's start with variable declaration

// Do
var someVar = "Function Scoped";
// Don't
someVar = "Global Scoped";

// It's very importaint to declare your variables using the "var" keyword.
// It keeps your veriables properly function scoped which brings us to our next topic

// Scope
// The main thing to remember about scope in JS is that it's a function scoped language not
// a block (lexical/static) scoped language like Ruby.

var someOuterFunction = function() {

  var someFunction = function() {

    var foo = "foo";

  }

};

foo // => undefined

// -----------------------------------------------

var foo = "foo"

var someOuterFunction = function() {

  var someFunction = function() {
    return foo // => "foo"
  }

};

// SIDE_NOTE: There is no implicit return in JS you must use the keyword "return" if you
// want your function to return something!

// When someFunction sees the foo it first checks within someFunction's (its own) scope
// asks "you ever heard of the variable foo?" someFunction replies to itself "Nope, never
// heard of foo". Then someFunction goes up a level. someFunction asks someOuterFunction
// "ever heard of foo?" someOuterFunction replies "nope, never heard of foo". Then, finally,
// someFunction asks global scope "ever heard of foo?" and global replies "yes, foo
//  = 'foo' "

// A contrived example, sure, however this illustrates how it works when someFunction fires
// it goes looking for foo. In the first example global scope is looking for foo and cannot
// ask any outer functions nor is it defined locally and therefore it's undefined.