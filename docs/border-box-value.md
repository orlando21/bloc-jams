### How the `border-box` value works ###

CSS regards all elements, even nested ones, as "boxes," each box containing concentric layers starting from the innermost, content, and then (going outwards) to padding, border, and lastly margin.

It is important to understand how changing the values of each of these layers affects those directly outside of them. The box model of CSS is helpful for this understanding.

When changing the values of layers such as padding for an element, one can leave the other layers on top to either freely and reactively adjust to that change, or one can constrain those other layers to not change in reaction. For example, when you increase the value for the padding property of an element, this might cause the height and width of the total size of the "box" containing that element (not the actual height and width values of the element) to correspondingly increase in size.

By default, the `box-sizing` property is set to `content-box` for browsers. This allows the total size of the box as described above to freely adjust either smaller or bigger to changes in value of inner properties.

However you can constrain the total size of the box to not adjust when values of inner properties are changed. In this case you would set the property as `box-sizing: border-box`.