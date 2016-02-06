### The difference between absolute and relative positioning ###

Positioning is one of the most, if not _the_ most important feature of CSS, and part of CSS' flexibility in enabling total control of elements in the viewport is via the complexity of its layout rules.

One dimension of this complexity is the variation with which the positioning property of an element can be specified. In particular, the relative and absolute types of this property allows use of a document coordinate system for positioning. The table below compares the two types according to several criteria.


| Criterium  | Relative Positioning | Absolute Positioning |
| ------------- | ------------- | ------------- |
| Uses offsetting?  | Yes, in coordinate system  | Yes, in coordinate system  |
| Creates coordinte system for child elements?  | Yes  | Yes  |
| Within document flow?  | Yes  | No (independent)  |
| Height and width necessary?  | Yes size must be specified  | No, can specify size indirectly  |
| Offset influences next element?  | No | No  |
| Allows absolute centering?  | No  | Yes, but must declare height  |