# Comments
Comments in AIM can be either single- or multi-line. They’re meant to provide an ability to easily document your code for its better readability and understanding.

## Single-line comments

Single-line comments in AIM are indicated with **>>>** symbol, after which each token is ignored in the compilation process.

```
>>> Single-line comment
```

## Multi-line comments

Multi-line comments start with shorter **>>** symbol, and - as they can be multi-line - their ending is marked with **<<**. **WIP!** Changes to multi-line comments are likely to appear.

```
>>
Multi-line comment
<<
```



## Documentation syntax - WIP!

When creating documentation for your code you can use the ***AIMDoc*** syntax. While inside multi-line comment, you can start your docs session with two or more dashes (**--**). The section can be ended using the same convention. While inside, you can add documentation for every token occurring in the code-line under the comment by **writing its name preceded by a single hash ( # )**. Until the ending of the section or another single hash, everything you write is taken as the documentation for the referenced token. You can also add ***AIMDoc*** tags to any token documentation by preceding tag name by **@** character.

```
>>------
#token - basic description
	@tag - tag description
------<<
token
```

