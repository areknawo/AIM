# AIM - Programming language syntax specification

This document aims :sweat_smile: to provide an appropriate description for AIM programming language features & syntax in general. Keep in mind that **this specification** is still very much **work in progress** and any **commits are welcomed**! New ideas for different features that are even more new are marked with ***“WIP!”*** (Work In Progress) flag and should be considered only as **possible suggestions** for future syntax’s features.

## General information

* AIM greatly differentiate from other programming languages. It has constructs that other languages don’t have, which allows its syntax to be more generalized and easy to use.

* There are no semicolons in AIM. They are inserted automatically by lexer in certain places.

## Structure

This specification is divided by different structures of AIM language. They can be combined and used together to create full-fledged AIM code. Because of this AIM is meant to be fast and developer-friendly language. For a bit more information on AIM’s purpose see [this short note](./why.md).

* [Comments](./comments.md)
* [Types](./types.md)
* [Advanced types](./advancedtypes.md)
* [Directives](./directives.md)
* [Modifiers](./modifiers.md)
* [Mutators](./mutators.md)

## Main - WIP!

Every piece of code in AIM should be placed inside a codeblock. For modularity, you can use [module codeblocks](./directives.md). Execution of AIM code starts from a **main codeblock’s main method**.

```
{ >> Main codeblock (first one)
    <>{} >> Main method
}
```



## Variables

Variable’s **name** can contain **any letters, numbers (not at the beginning) and underscores**, **no whitespace** and **no reserved-names usage**. Variables in AIM are defined using **type** or **assignment** [modifier](./modifiers.md):

`myVar #uint8 = 10`

AIM has **type inference** built-in and types can be omitted when initialized with a value directly:

`myVar = 10  >> int8 (lowest possible bit count - signed only)`

You can also define multiple variables using type inference or not:

`myVar1, mVar2 = 10, ‘a’ >>types respectively int8, char`

For better performance use of types is recommended, but not required.

[**Dynamic**](./mutators.md) variables, when passing them to **codeblocks** with **runner** are being bound with the codeblock. It means, that when the variable changes the codeblock is re-executed if given codeblock didn’t contain **@return** [directive](./directives.md). It’s not the case for **static** variables (default in AIM). If you still want to pass a dynamic argument to a codeblock without the @return directive, you can use the static modifier to convert this variable to **static** just for the purpose of this single execution.

```
render #codeblock = <toRender #string>{
    >> Do something without @return
}
dynamic willRender = 'render'
dynamic willRenderOnce = 'render-once'

render(willRender) >> Will rerun
render(static willRenderOnce) >> Will run once

willRender = 'yes' >> Rerun
willRenderOnce = 'indeed' >> Nothing
```

## Constructions

Instead of functions, classes etc. in AIM there’s a universal [**codeblock**](./advancedtypes.md). Take a look at how to represent different structures with it.

### Functions

```
add #codeblock = <a #int32, b #int32>{
    @return(a + b)
}
add(1, 3) >> use runner to execute codeblock
```

### Interfaces & objects

```
car #codeblock = {s
    public color #string
    public mark #string
    public year #uint32
}

myCar #car = {
    color = "red"
    mark = "BMW"
    year = 2018
}
myCar.color >> "red"
```



### Classes

```
vehicle #codeblock = {
	protected year #uint32
    public color #string
    <color #string, year #uint32>{
        ..color = color
        ..year = year
    }
}
redBike #codeblock = @extend(vehicle, {
    <year #uint32>{
        ..color = "red"
        ..year = year
    }
})
myRedBike #redBike => (2018)
myRedBike.color >> "red"
```



## Context - WIP!

Every **codeblock** has its own **scope**. Inside, you can define local variables, that can be accessed using just their names and public variables which can also be accessed from outside the codeblock with **access modifier**. To access scope of all upper codeblocks (in nested structures) you should use **context modifier**, as there’s no other way of accessing these variables otherwise. There are **no global variables in AIM**, just ones inside codeblocks.

```
{
	valueInCodeblock1 #int32 = 1
    {
    	valueInCodeblock2 #int32 = 2
    	..valueInCodeblock1 >> 1
        {
            valueInCodeblock3 #int32 = 3
            ..valueInCodeblock2 >> 2
            ..valueInCodeblock1 >> 1
        }
    }
}
```

