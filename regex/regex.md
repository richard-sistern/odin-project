# Regular Expressions

[The Net Ninja - Regular Expressions Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD)

## Global Pattern Flags

```regex
/<regex/gi
```

`g` global modifier, all matches (don't return after first match)
`i` case insensitive match (ignores case of [a-zA-Z])

## Character Sets

`[ng]inja` matches ninja or ginja
`[^p]inja` match any character other than p

## Ranges

`[a-z]` match the lower case alphabet only
`[a-zA-Z]` match upper and lower case alphabet
`[0-9]` match any number

## Repeating Characters

`[0-9]+` match 1 to n times

`[0-9]{11}` match 11 times

`[a-z]{11}` as above, with letters

`[a-z]{5,8}` match between 5 and 8 letters

`[0-9]{5,}` match 5 or over

## Meta Characters

`\d` match any digit character (same as [0-9])

`\w` match any word character (a-z, A-Z, 0-9, _)

`\s` match a white-space character (space, tab, etc.)

`\t` match a tab character only

`\d\s\w` will match 'd n' or '1 2'

`\d{3}\s\w{5}` will match '123 ninja'

## Special Characters

`+` one or more quantifier
`\` escape character
`[]` character set
`[^]` negate symbol in a character set
`?` zero or one quantifier (makes a preceding char optional).  For example, `/hello?/` matches hello or hell
`.` any character (except newline)
`*` 0 or more quantifier (bit like +)

## Starting and Ending Patterns

`/^` Start of regular expression

`$/` End of regular expression

For example. `/^[a-z]{5}/` will only match 5 letters

## Alternate Characters

| means or,  for example `/p|t/` matches p or t

(|) encloses the or, for example `/(p|t)yre/` matches pyre or tyre