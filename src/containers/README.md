CONTAINERS
=====================
```
This folder (containers) stores the smart components.
```
These components are characterized by:
* Wrap one or more dumb or smart components
* Hold states from Flux stores and pass it as objects to dumb components
* Call Flux actions and provide these as callbacks to dumb components
* Never have their own CSS styles
* Rarely emit DOM of their own, use dumb components for layout 

