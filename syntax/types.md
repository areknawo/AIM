# Types

AIM is meant to be a **strictly-typed** language with optional **type inference**. 

## Basic

For ease-of-use AIM is equipped with basic, standard types set:

* **int8** - type indicating **signed 8-bit integer**
* **uint8** - type indicating **unsigned 8-bit integer**
* **int16** - type indicating **signed 16-bit integer**
* **uint16** - type indicating **unsigned 16-bit integer**
* **int32** - type indicating **signed 32-bit integer**
* **uint32** - type indicating **unsigned 32-bit integer**
* **int64** - type indicating **signed 64-bit integer**
* **uint64** - type indicating **unsigned 64-bit integer**
* **float32** - type indicating **32-bit floating-point number**
* **float64** - type indicating **64-bit floating-point number**
* **bool** - type indicating **logical value** (either **true** or **false**)
* **char** - type indicating standard **ASCII character**
* **uchar** - type indicating **Unicode character**
* **string** - predefined type for **array of char**s**/uchar**s

## Arrays

In AIM an **array** of given type (either basic or [advanced](./advancedtypes.md) one) with given construction:

`type-for-array-elements[number-of-array-elements]`

Array elements can be accessed with the following syntax (**indexing starts from 0**):

`array[index-of-element]`

## Unions - WIP!

Union types allow indicating that variable can have multiple different types of values assigned to it. Unions work only on **basic types**, that means that unions can be created **only** using **integer**, **float** and **char**-based types - **no advanced types**, **arrays (including strings)** and other **unions types**! Union types cannot also mix **unsigned** integers with **signed** ones. Union types internally assign for your variable its biggest possible in-memory size. The syntax uses **alternation [modifier](./modifiers.md)** is as following:

`first-type|second-type|third-type`

Unions can be smaller (**2 elements minimum**) or bigger (**9 maximum possible elements**). Real use example can be like:

`int8|char|float64`

For a variable of this type 64-bits of memory will be allocated.