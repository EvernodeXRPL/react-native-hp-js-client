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

### Trusting ssl certificate
- If you get an ssl certificate validation error (ex: java.security.cert.CertPathValidatorException). You can add trust to your server certificate via AndroidManifest.xml.
- A solution can be found [here](https://github.com/axios/axios/issues/5271#issuecomment-1381800275).
  - You can view the server certificate by following openssl command.
    ```sh
    openssl s_client -showcerts -verify 5 -connect <domain>:<port> < /dev/null
    ```
  - To create the certificate file, Copy the above fetched certificate into a file with `.pem` extension.

### NPM package
https://www.npmjs.com/package/react-native-hotpocket-js-client