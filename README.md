
# MethodReady

This is a very simple plugin for jQuery to wait for a DOMElement method to become ready before firing.
The most common use case here is to wait for an ExternalInterface method in Flash, which isn't guaranteed
to be ready even when the window has fully loaded. MethodReady will set a simple timeout and once the method
appears on the element it will fire.

## Usage:

The callback is passed no arguments, and simply the DOMElement itself as the scope:

```
$('element').methodReady('playAudio', function() {
  this.playAudio(someURL);
});
```
