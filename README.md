# he-input-number-increment
Lightweight and simple tabs plugin for creating tabbed content on the page.

Simple to implement and has an automatic, built-in, responsive mode.

Written by Human Element's milligan

See <a href="http://humanelement.github.io/he-tabs-plugin/" target="_blank">DEMO</a>

Usage examples:
```Javascript
//example 1
heNumberIncrement.init({
    input:'.qty-wrapper.example1 .input-text.qty:first', //which <input> element?
    up_btn:'.qty-wrapper.example1 .qty_btns .up:first', //what is the up button element?
    down_btn:'.qty-wrapper.example1 .qty_btns .down:first', //what is the down button element?
    min:1, //minimum allowed value
    max:-1, //maximum allowed value (-1 = no limit)
    start_at:1, //number to start at on page load
    step:1 //how much to add or subtract whenever clicking on the up or down button
});

//example 2
heNumberIncrement.init({
    input:'.qty-wrapper.example2 .input-text.qty:first', //which <input> element?
    up_btn:'.qty-wrapper.example2 .qty_btns .up:first', //what is the up button element?
    down_btn:'.qty-wrapper.example2 .qty_btns .down:first', //what is the down button element?
    min:3, //minimum allowed value
    max:5, //maximum allowed value (-1 = no limit)
    start_at:3, //number to start at on page load
    step:2 //how much to add or subtract whenever clicking on the up or down button
});

```
