# NiNgUtilities

This project contains a series of utilities that can be used in any Angular application.

## Components

### BooleanToYesNoComponent

This component takes a boolean value and displays it in yes / no format. It is fully internationalized.

Usage:

```html
<ni-boolean-to-yes-no [boolean]="{boolean:boolean}"></ni-boolean-to-yes-no>
```

Output:
```html
Yes
```


## Directives

### AutofocusDirective

Allows a stronger, cross-browswer implementation of autofocus.

Usage: 

```html
<input autofocus="{boolean:boolean}" />
```

Effect:
Focuses the given input whenever it is added to the DOM

### TimeDirective

Render a time element with both a semantic, machine-readable date in UTC and a user readable date in the local timezone

Usage: 

```html
<time [date]="{date:date}" format="{format:string}"></time>
```

Output:

```html
<time datetime="2019-05-02T05:55:04.000Z" title="Thursday, May 2, 2019 at 5:55:04 AM GMT+00:00">5/1/19</time>
```