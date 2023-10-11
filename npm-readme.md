# HotPocket React Native client

- [Example React Native usage](https://github.com/HotPocketDev/react-native-hp-js-client/blob/main/example/App.js)

## Prerequisites
- Install `react-native-get-random-values`
```sh
npm install react-native-get-random-values
```
- Modify `app.json`
```json
{
  ...
  "expo": {
    ...
    "plugins": [["react-native-libsodium", {}]]
  }
}
```