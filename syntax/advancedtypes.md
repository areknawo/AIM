# Advanced types

AIM types, that differentiate it from any other languages are called **advanced types**. Using these constructs you can represent commonly seen constructs with a more standardized, common syntax.

## Codeblock

* **type indicator**: *codeblock*

**Codeblock** is the most important advanced type. Using it, you can represent constructions, such as **functions**, **objects**, **classes**, and **interfaces** with a simple syntax. Codeblock is nothing more than just two **curly brackets** and the code inside them:

`{code_for_the_codeblock}`

Inside a codeblock, you can place every possible AIM syntax structure you want. If you need to use your codeblock as a class or type for a variable, you first have to define its **constructor**/**main method**. You can do this by creating **nameless** codeblock directly **bound** with **empty** (or not if you want to specify some parameters) **receiver**.

```
{
    <>{codeblock_main_method}
}
```



## Receiver

* **type indicator**: *receiver*

**Receiver** is a helper type for codeblock. It allows passing **parameters** to the local scope of the codeblock. Receiver and its parameters can be defined with the following syntax:

`<param1 #type_of_param1, param2 #type_of_param2>`

## Runner

* **type indicator**: *runner*

**Runner** allows **executing** the code inside the codeblock. It also allows you to **bind** arguments to the connected receiver and thus to codeblock itself.

`(value_for_param1, value_for_param2)`