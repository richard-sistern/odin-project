# Regular Expressions

[The Net Ninja - Regular Expressions Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD)

## Global Pattern Flags

```regex
/<regex/gi
```

`g` modifier: global. All matches (don't return after first match)
`i` modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])

## Character Sets

`[ng]inja`: matches ninja or ginja
`[^p]inja`: match any character other than p

## Ranges

`[a-z]`: match the lower case alphabet only
`[a-zA-Z]`: match upper and lower case alphabet
`[0-9]`: match any number

## Repeating Characters

`[0-9]+`: match 1 to n times

`[0-9]{11}`: match 11 times

`[a-z]{11}`: as above, with letters

`[a-z]{5,8}`: match between 5 and 8 letters

`[0-9]{5,}`: match 5 or over

## Meta-characters

`\d` match any digit character (same as [0-9])

`\w` match any word character (a-z, A-Z, 0-9, _)

`\s` match a white-space character (space, tab, etc.)

`\t` match a tab character only

`\d\s\w` will match 'd n' or '1 2'

`\d{3}\s\w{5}` will match '123 ninja'