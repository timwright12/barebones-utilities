# barebones-utilities

## Barebones.getUrlParams

API to get parameters from a URL;

### Usage
```
// http://example.com/?q=help
const params = Barebones.getUrlParams( window.location.search );
console.log(params.q); // returns "help"
```

## Barebones.Focus.trap;

Set focus trapping on a DOM element (good for modals and areas where focus needs to be trapped)

### Usage
```
const el = document.getElementById('trapper');

const obj = new Barebones.Focus( el, {
	setFocus: true
} );

obj.trap();
```

## Barebones.Focus.untrap;

Remove focus trapping on a DOM element

### Usage
```
// Use the same object and vars as you used when trapping
const el = document.getElementById('trapper');

const obj = new Barebones.Focus( el, {
	setFocus: true
} );

obj.untrap();
```
