---
prev: /storyscript/flow/
next: /storyscript/secrets/
---

# Advanced

## Variable Scope

Functions do not have access to variables outside their scope.
All variables must be provided as arguments.

```coffeescript
n = 1

function incr
  n = n + 1
    # ^ Error: variable `n` is undefined.
```

Loops (`foreach` and `while`), `try/catch`, `when` blocks and service blocks create their own nested scope.
Variables created in this scope CANNOT be accessed from the outside:

```coffeescript
foreach [1, 2, 3] as el
  …
a = el # ERROR
```

However, access to outside variables is allowed in nested scopes:

```coffeescript
last = 0
foreach [1, 2, 3] as el
  last = el # OK
```

Moreover, for if/else blocks the variable will be accessible in the parent scope
if _all_ code blocks declare the respective variable.

```coffeescript
if weather == "sunny"
  wind_kmh = 2
else
  wind_kmh = 10

wind_ms = wind_kmh / 3.6 # OK
```

However, the following is not allowed as `wind_kmh` wasn't declared by
all code paths:

```coffeescript
if weather == "sunny"
  wind_kmh = 2
else
  storm_kmh = 10

wind_ms = wind_kmh / 3.6 # ERROR
```

Analogous, if the `else` block is missing, it isn't possible
to access `wind_kmh` in the parent scope either as it wasn't declared by all code paths:

```coffeescript
if weather == "sunny"
  wind_kmh = 2

wind_ms = wind_kmh / 3.6 # ERROR
```

## Operations

Storyscript provides a few special operations.
One of the them is the `end` operation:

```coffeescript
if something_went_wrong
    end story
```

This `end story` operation can be used to stop a story and exit immediately.


## Exception Handling

```coffeescript
try
  a = "abc" as int
catch
  a = 42 # fallback
finally
  submission_service send nr:a
```

In Storyscript `try` blocks catch exceptions and pass the error to the `catch` block.

A `finally` block is **always** entered regardless of an exception being raised or not.
This is useful for cleanup commands.

You may omit both the `catch` and `finally`.

```coffeescript
try
  a = "abc" as int
catch
  a = 42 # fallback
```

Custom exceptions can be raised with the `throw` keyword:

```coffeescript
if arr.contains("red")
  throw "My Exception"
```

It is only allowed to `throw` `string` messages.

New variables declared in a `try` block will only be accessible in the parent scope
if the respective variable of the same type has also been declared in its `catch` block.
The following is not possible:

```coffeescript
try
  a = "abc" as int

b = a # ERROR
```

However, variables declared in the `finally` block are part of the parent scope:

```coffeescript
try
  a = "abc" as int
finally
  b = 1

c = b # OK
```

## Type checking

Storyscript allows a few implicit type conversions:

- `int` types are implicitly convertible to `float`
- all types are implicitly convertible to `any`

If a type is unknown, the Storyscript compiler will infer it to `any`.

The generic container types `List` and `Map` can be constructed from base types
or themselves.
Examples:

- `List[int]`
- `List[List[int]]`
- `Map[int, string]`
- `Map[int, List[string]]`

### Assignments

A type must be implicitly convertible to the assignment variable.

```coffeescript
a = 1
a = "foo" # E0100: Can't assign `string` to `int`
```

### Boolean operations

Boolean operators are: `and`, `or`, and `not`.
All types need to be explicitly converted to a `boolean` with e.g.
comparison operation (e.g. `a == b`) or a built-in (e.g. `a.empty()`).

### Arithmetic operations

Arithmetic operators are: `+`, `-`, `*`, `/`, `%` and `^`.
The following operations are supported for the respective Storyscript type:

Type       | Operations | Remarks
-----------|------------|------
`boolean`  | all        | Arithmetic operations between two `boolean`s are implicitly converted to `int`
`int`      | all        |
`float`    | all        |
`regexp`   | (none)     |
`time`     | `+`, `-`   |
`string`   | `+`        | Addition with any other type is possible, returns a `string`
`List`     | `+`        |
`Map`      | (none)     |
`none`     | (none)     |
`any`      | varies     | The other type must support this operation, returns `any`

If for the arithmetic operation `<left> <op> <right>`,
`left` and `right` have mismatching types, the compiler will try to implicitly cast
`left` to `right` and `right` to `left`. If both casts fail, the operation is
disallowed. Otherwise the type system will check the operation on the up-casted
type.

### Comparisons operations

The following types support comparison operations:

- `boolean`
- `int`
- `float`
- `time`
- `string`
- `any`

Examples:

```coffeescript
2 < 3                  # OK
{"a":"b:"} < {"c": "d"} # Always disallowed
```

Remarks: when comparing a type with `any`, this type must support comparisons too.

### Equality operations

All real types can be checked for their equality with themselves.
Only the virtual `none` type (e.g. from a function without a return type) can't
check for its equality.

### Map keys

The following types can be used as map keys:

- `boolean`
- `int`
- `float`
- `time`
- `string`
- `any`

Examples:

```coffeescript
a["a"]   # OK
a[/foo/] # Always disallowed
```

## Operator precedence

Operators with a higher precedence will be evaluated first.
Storyscript has the following operator precedence (from higher precedence down to lower precedence):

- `or` (Or expression)
- `and` (And expression
- `<`, `<=`, `==`, `!=`, `>`, `>=` (Comparison expression)
- `+`, `-` (Arithmetic expression)
- `*`, `/`, `%` (Multiplicative expression)
- `as` (As expression)
- `!` (Unary expression)
- `^^` (Pow expression)
- `.`, (Dot expression) `[...]` (Index expression)
- Literals (`1`, `1.2`, `[1, 2, 3]`, `{a: b}`, …)
- `(...)` (Nested expression)

Examples

```coffeescript
1 + 2 * 3    # 7
(1 + 2) * 3  # 9

true and false or true # true
true or false and true # true
```

## Application Information

Storyscript has access to application level information under the keyword `app`, containing the following details:

```coffeescript
app.secrets   # map of environment variables set via the CLI (more below)
app.hostname  # the full http dns hostname where your application is located
              # e.g, "smart-einstein-1235.storyscriptapp.com"
app.version   # the release number of the application (see "story releases list" for releases)
              # e.g, "v1"
```
