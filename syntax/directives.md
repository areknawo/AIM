# Directives

Directives are special AIM constructs that allow extending the language functionality. They’re meant to be provided mainly by **the standard library**. After referencing the directive with **@** [modifier](./modifiers.md) you can call it using [**the runner**](./advancedtypes.md), just like a normal codeblock. As directives are meant to be provided by **stdlib**. Below is an example of how directives can be interacted with:

```
@thread({
    code_to_be_run_in_separate_thread
})
```

## Proposal list - WIP!

The following list consist of some proposed directive included in AIM or any future part of **stdlib** and can be drastically change over time:

* **@return** - used in **codeblocks** to end its execution and return value
* **@module** - indicates given codeblock as a **module**
* **@import** - allows using exported **modules**
* **@export** - allows exporting **modules**
* **@use** - allows using **modules** variables in current context, like local ones
* **@thread** - allows executing given codeblock in another thread
* **@extend** - allows extending given codeblock (just like standard classes)