# ReactJs, Marty and Google Maps API
---

## Basic example that uses ReactJs, Marty and Google Maps API

- Uses a select dropdown and simple buttons to interact with user
- Upon a selection or click, an action is called by the component.
- The dispatcher fires the action, and the store listens to the action with the appropriate handler
- The store updates its state
- The top level component listens to the store and updates its props accordingly.
- The top level component populates the props properties of all its children, and the map is updated

## To Run:
```
$ pip install flask
$ npm install
$ webpack           # might need `npm install webpack -g`
$ python app.py
```

## To Test:
### setup
```
$ npm install jest-cli --save-dev
$ npm install babel-jest --save-dev
```

### run it:
```
$ npm run test-jest
```

## Refs
- THIS SUCKS: http://stackoverflow.com/questions/25142173/debugging-jest-test-cases-using-node-inspector
- testing with marty: https://github.com/martyjs/marty/issues/115
