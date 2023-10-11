# HotPocket React Native client

- [Example React Native usage](https://github.com/HotPocketDev/react-native-hp-js-client/blob/main/example/App.js)

## Prerequisites
- Install `react-native-get-random-values`
```sh
npm install react-native-get-random-values
```
- Import in `index.js`
```js
import 'react-native-get-random-values';
```
- Install `react-native-libsodium`
```sh
npm install react-native-libsodium
```
- Add plugin in `app.json`
```
{
  ...
  "expo": {
    ...
    "plugins": [["react-native-libsodium", {}]]
  }
}
```