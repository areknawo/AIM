# Modifiers

Modifiers are the main assets of AIM language. These are short constructs that allow to commit operations between different types. Each one of modifiers works on different AIM types and provides different functionality. The list below includes a short description for each of modifiers with additional notes for **parser** implementation.

## List - WIP!

### Directive modifier

- Symbol: ***“@”***
- ID: “*DirMod*”
- Used to indicate that specified name is a reference to [**a directive**](./directives.md).
- Takes directly following tokens (without space) as **name** property.

### Context modifier

- Symbol: ***“..”***
- ID: “*CtxMod*”
- Used to access global context.
- Takes directly following tokens (without space) as **key** property.

### Multiplication modifier 

- Symbol: ***“\*”***
- ID: “*MulMod*”
- Used to multiply **numbers** and create loop with combination of **numbers with [codeblocks](./advancedtypes.md)**.
- Takes preceding and following structures as **left** and **right** properties.

### Equality modifier

- Symbol: ***“==”***
- ID: “*EqlMod*”
- Used to convert 2 given values of the same type to **boolean** if these are equal.
- Takes preceding and following structures as **left** and **right** properties.

### Typecast modifier

- Symbol: ***“#”***
- ID: “*TypeMod*”
- Used to define **variable’s type**.
- Takes preceding tokens as **name** property and directly following ones as **type** property.

### Access modifier

- Symbol: ***“.”***
- ID: “*AccessMod*”
- Used to access  **public variables** of codeblocks.
- Takes directly preceding tokes as **struct** property and directly following as **key** property.

### Alternative modifier

- Symbol: ***“|”***
- ID: “*AlterMod*”
- Used to provide **alternative logical value** and to **create unions**.
- Takes preceding tokes as **default** and following as **alter** properties.

### Bind modifier

* Symbol: ***“=>”***
* ID: “*BindMod*”
* Used to bind **advanced types**. Can be omitted when one operand is a static value.
* Takes preceding tokens as **left** and following tokens as **right** properties.

### Escape modifier

* Symbol: ***“$”***
* ID: “*EscapeMod*”
* Used in string to reference **escaped values**.
* In string takes directly following tokens ( inside receiver ) as **escaped** property.

### Addition modifier

* Symbol: ***“+”***
* ID: “*AddMod*”
* Used to **add numbers**, **element to the end of array** and **concatenate arrays**.
* Takes preceding and following tokens as **left** and **right** properties.

### Single Addition modifier

- Symbol: ***“++”***
- ID: “SingleAddMod”
- Used to **increase** numbers **by 1**.
- Takes directly preceding tokens as **name** property.

### Substitution modifier

* Symbol: ***“-”***
* ID: “*SubMod*”
* Used to **subtract numbers**.
* Takes preceding and following tokens as **left** and **right** properties.

### Single Substitution modifier

* Symbol: ***“--”***
* ID: “SingleSubMod”
* Used to **decrease** numbers **by 1**.
* Takes directly preceding tokens as **name** property.

### Subdivision modifier

* Symbol: ***“/”***
* ID: “DivMod”
* Used to divide numbers.
* Takes preceding and following tokens as **left** and **right** properties.

### Power modifier

* Symbol: ***“^”***
* ID: “*PowMod*”
* Used to **raise** number **to the power** of another.
* Takes preceding and following tokens as **left** and **right** properties.

### Modulo modifier

* Symbol: ***“%”***
* ID: “*ModMod*”
* Used to receive **rest from dividing** one number by other.
* Takes preceding and following tokens as **left** and **right** properties.

### Negation modifier

* Symbol: ***“!”***
* ID: “*NegMod*”
* Used to **negate given value**. E.g. *number to its negative equivalent*, *true to false*
* Takes directly preceding tokens as **value** property.

### Assignment modifier

* Symbol: ***“=”***
* ID: “*AssignMod*”
* Used to **set value** of the variable.
* Takes preceding tokens as **name** parameter and following as **value**.

### Join modifier

* Symbol: ***“&”***
* ID: “*JoinMod*”
* Used to create **logical AND expression** (*convert 2 booleans into one - **true if both are true***)
* Takes preceding tokens as **left** and following ones as **right**.

### Spread modifier

* Symbol: ***“...”***
* ID: “*SpreadMod*”
* Used to:
  - **spread arrays of values**
  - **group rest arguments to arrays**
* Takes directly following tokens as **value** property.

### Question modifier

* Symbol: **?**
* ID: “*QueMod*”
* Used to convert values into booleans:
  - *numbers higher or equal to 0 to true*
  - *undefined, null and void to false*
  - *all other types to true*
* Takes directly preceding tokens as **value** property.

