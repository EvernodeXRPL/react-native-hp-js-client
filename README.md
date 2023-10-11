# HotPocket React Native client
HotPocket javascript client library to support json and bson protocols in React Native environments.

### Publish to npm
```
npm install
npm login
npm run publish
```

### Testing example client
- Create sample React Native app and replace App.js.
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


### NPM package
https://www.npmjs.com/package/react-native-hotpocket-js-client