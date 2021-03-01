# JavaScript

## Fundamentals

### Variables

*Notes from [javascript.info](https://javascript.info/variables)*

Declaring a variable in JavaScript has changed from `var` to `let` and `const`.

```javascript
let message = 'Hello!'; // define the variable and assign the value

alert(message); // Hello!
```

Being a "constant" just means that a variable’s value never changes. But there are constants (A_CONSTANT_NAME) that are known prior to execution (like a hexadecimal value for red) and there are constants (aConstantName) that are *calculated* in run-time, during the execution, but do not change after their initial assignment.

[Why You Shouldn’t Use var Anymore](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70)

### Operators

Notes from [javascript.info](https://javascript.info/operators)

### Presidence

```JavaScript
let a = 1, b = 1;

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once
```

### Type Conversion
```JavaScript
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)
```
