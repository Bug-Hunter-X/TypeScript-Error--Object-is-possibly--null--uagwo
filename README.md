# TypeScript Error: Object is possibly 'null'

This repository demonstrates a common TypeScript error: 'Object is possibly 'null'. This error arises when you attempt to access a property of an object that might be null or undefined.  The example shows how to mitigate the error using optional chaining and nullish coalescing.

## Bug
The `printName` function attempts to access the `toUpperCase()` method of the `name` parameter, which is declared as `string | null`. TypeScript flags this as a potential error because `name` might be null. The solution showcases how to handle this possibility.

## Solution
The solution involves using optional chaining (`?.`) to safely access the `toUpperCase()` method. If `name` is null, the expression short-circuits and returns undefined, avoiding an error. Nullish coalescing (`??`) provides a default value if `name` is null or undefined.