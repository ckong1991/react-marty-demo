Basic example that uses ReactJs, Marty and Google Maps API

- Uses a select dropdown and simple buttons to interact with user
- Upon a selection or click, an action is called by the component.
- The dispatcher fires the action, and the store listens to the action with the appropriate handler
- The store updates its state
- The top level component listens to the store and updates its props accordingly.
- The top level component populates the props properties of all its children, and the map is updated

To Run:

- pip install flask
- npm install
- webpack
- python app.py

- * if webpack doesn't work, try to install globally (npm install webpack -g)