# Modifiers

Modifiers are the main assets of AIM language. These are short constructs that allow to commit operations between different types. Each one of modifiers works on different AIM types and provides different functionality. The list below includes a short description for each of modifiers with additional notes for **parser** implementation.

## List - WIP!

### Directive modifier

- Symbol: ***“@”***
- ID: “*directive_modifier*”
- Used to indicate that specified name is a reference to [**a directive**](./directives.md).
- Takes directly following tokens (without space) as **name** property.

### Context modifier

- Symbol: ***“..”***
- ID: “*context_modifier*”
- Used to access global context.
- Takes directly following tokens (without space) as **key** property.

### Multiplication modifier 

- Symbol: ***“\*”***
- ID: “*multiplication_modifier*”
- Used to multiply **numbers** and create loop with combination of **numbers with [codeblocks](./advancedtypes.md)**.
- Takes preceding and following structures as **left** and **right** properties.

### Equality modifier

- Symbol: ***“==”***
- ID: “*equality_modifier*”
- Used to convert 2 given values of the same type to **boolean** if these are equal.
- Takes preceding and following structures as **left** and **right** properties.

### Type modifier

- Symbol: ***“#”***
- ID: “*type_modifier*”
- Used to define **variable’s type**.
- Takes preceding tokens as **name** property and directly following ones as **type** property.

### Access modifier

- Symbol: ***“.”***
- ID: “*access_modifier*”
- Used to access  **public variables** of codeblocks.
- Takes directly preceding tokes as **struct** property and directly following as **key** property.

### Alternative modifier

- Symbol: ***“|”***
- ID: “*alternative_modifier*”
- Used to provide **alternative logical value** and to **create unions**.
- Takes preceding tokes as **default** and following as **alter** properties.

### Bind modifier

* Symbol: ***“=>”***
* ID: “*bind_modifier*”
* Used to bind **advanced types**. Can be omitted when one operand is a static value.
* Takes preceding tokens as **left** and following tokens as **right** properties.

### Escape modifier

* Symbol: ***“$”***
* ID: “*escape_modifier*”
* Used in string to reference **escaped values**.
* In string takes directly following tokens ( inside receiver ) as **escaped** property.

### Addition modifier

* Symbol: ***“+”***
* ID: “*addition_modifier*”
* Used to **add numbers**, **element to the end of array** and **concatenate arrays**.
* Takes preceding and following tokens as **left** and **right** properties.

### Increasement modifier

- Symbol: ***“++”***
- ID: “*increasement_modifier*”
- Used to **increase** numbers **by 1**.
- Takes directly preceding tokens as **name** property.

### Substitution modifier

* Symbol: ***“-”***
* ID: “*substitution_modifier*”
* Used to **subtract numbers**.
* Takes preceding and following tokens as **left** and **right** properties.

### Decreasement modifier

* Symbol: ***“--”***
* ID: “*decreasement_modifier*”
* Used to **decrease** numbers **by 1**.
* Takes directly preceding tokens as **name** property.

### Subdivision modifier

* Symbol: ***“/”***
* ID: “subdivision_modifier”
* Used to divide numbers.
* Takes preceding and following tokens as **left** and **right** properties.

### Power modifier

* Symbol: ***“^”***
* ID: “*power_modifier*”
* Used to **raise** number **to the power** of another.
* Takes preceding and following tokens as **left** and **right** properties.

### Modulo modifier

* Symbol: ***“%”***
* ID: “*modulo_modifier*”
* Used to receive **rest from dividing** one number by other.
* Takes preceding and following tokens as **left** and **right** properties.

### Negation modifier

* Symbol: ***“!”***
* ID: “*negation_modifier*”
* Used to **negate given value**. E.g. *number to its negative equivalent*, *true to false*
* Takes directly preceding tokens as **value** property.

### Assignment modifier

* Symbol: ***“=”***
* ID: “*assignment_modifier*”
* Used to **set value** of the variable.
* Takes preceding tokens as **name** parameter and following as **value**.

### Join modifier

* Symbol: ***“&”***
* ID: “*join_modifier*”
* Used to create **logical AND expression** (*convert 2 booleans into one - **true if both are true***)
* Takes preceding tokens as **left** and following ones as **right**.

### Spread modifier

* Symbol: ***“...”***
* ID: “*spread_modifier*”
* Used to:
  - **spread arrays of values**
  - **group rest arguments to arrays**
* Takes directly following tokens as **value** property.

### Question modifier

* Symbol: **?**
* ID: “*question_modifier*”
* Used to convert values into booleans:
  - *numbers higher or equal to 0 to true*
  - *undefined, null and void to false*
  - *all other types to true*
* Takes directly preceding tokens as **value** property.

