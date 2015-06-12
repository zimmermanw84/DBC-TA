// Let's start with variable declaration

// Do
var someVar = "Function Scoped";
// Don't
someVar = "Global Scoped";

// It's very important to declare your variables using the "var" keyword.
// It keeps your variables properly function scoped which brings us to our next topic

// Scope
// The main thing to remember about scope in JS is that it's a function scoped language not
// a block (lexical/static) scoped language like Ruby.

var someOuterFunction = function() {

  var someFunction = function() {
    var foo = "foo";
  }

};

console.log(foo) // => undefined

// -----------------------------------------------

var foo = "foo"

var someOuterFunction = function() {

  var someFunction = function() {
    console.log(foo); // => "foo"
  }

};

// When someFunction sees the foo it first checks within someFunction's (its own) scope
// asks "you ever heard of the variable foo?" someFunction replies to itself "Nope, never
// heard of foo". Then someFunction goes up a level. someFunction asks someOuterFunction
// "ever heard of foo?" someOuterFunction replies "nope, never heard of foo". Then, finally,
// someFunction asks global scope "ever heard of foo?" and global replies "yes, foo = 'foo'"

// A contrived example, sure, however this illustrates how it works when someFunction fires
// it goes looking for foo. In the first example global scope is looking for foo and cannot
// ask any outer functions nor is it defined locally and therefore it's undefined.


// Function Declaration vs Function Expression(s)

// Function Declaration

// Will be hoisted
function foo() {
  return "foo";
};

// Won't be hoisted

// Anonymous Function Expression
var foo = function() {
  return "foo";
};

// Named Function Expression
var foo = function foo() {
  return "foo";
};

// -----------------------------------------------

foo(); // => "foo"

function foo() {
  return "foo";
};

// -----------------------------------------------

foo(); // => undefined

var foo = function() {
  return "foo";
};

// Now why is that? That's right... Hoisting.
// Without going into too much detail, it's the "var" declaration that keeps the function
// expression in place. It's actually the same reason when you declare a variable without
// "var" it ends up on the global scope.

// So what's the big deal?

// -----------------------------------------------

foo = 1;

var someFunction = function() {
  foo = "bar";
};

someFunction();
console.log(foo); // => "bar";

// On a bigger codebase with multiple developers working on the same app. You don't have
// control over other people's variable name choices. What if you get a bug where you're
// overriding someone else's code and it's takes you years to find it? Or one of your
// functions get hoisted during asset compiling and breaks production?

// Sure that sounds extreme but it's possible. The only thing we actually have in life
// is time. If you can save yourself some before you spend it on fixing a problem
// that was completely preventable... You'll have more time to spend all that money
// you're making... ;P