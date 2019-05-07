# NiNgUtilities

This project contains a series of utilities that can be used in any Angular application.

## Components

### BooleanToYesNoComponent

This component takes a boolean value and displays it in yes / no format. It is fully internationalized.

Usage:

```<ni-boolean-to-yes-no [boolean]="true"></ni-boolean-to-yes-no>```

Output:
Yes


## Directives

### AutofocusDirective

Allows a stronger, cross-browswer implementation of autofocus.

Usage: 

```<input autofocus="true" />```

Effect:
Focuses the given input whenever it is added to the DOM