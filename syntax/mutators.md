# Mutators

Mutators are keywords used in AIM to edit certain aspects of variables. There are 3 different types of mutators and they can be used together ( one mutator of one type ).

## Accessibility mutators

### Public

* Keyword: ***“public”***
* Changes variable scope to **public**. Means that variable is accessible anywhere with the use of **access [modifier](./modifiers.md)**.

### Protected

* Keyword: ***“protected”***
* Changes variable scope to **protected** (**default**). Means that variable is only **accessible** inside its declaration **codeblock and its derivatives** (when used as type).

### Private

* Keyword: ***“private”***
* Changes variable scope to **private**. Means that variable is only **accessible** **inside declaration codeblock**.

## State mutators

### Static

* Keyword: ***“static”***
* Changes variable to **static / constant** (**default**). Means that variable‘s **value cannot be changed** after its first assignment.

### Dynamic

* Keyword: ***“dynamic”***
* Changes variable to **dynamic**. Means that variable’s **value can be changed** even after the first assignment.

## Value mutators - WIP!

### Save

* Keyword: ***“Save”***
* **Saves variable value across codeblock’s derivatives**. Means that variable can be accessed across different variables of the same codeblock type.



