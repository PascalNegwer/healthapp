Wenn man mit einem selbst-signierten Zertifikat unterwegs ist muss man in einem neuen Fenster die Überprüfung des Zertifikats abstellen
```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir=/tmp/foo --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://pwa.test
```

Ein sehr gutes [Tutorial](https://www.youtube.com/watch?v=gcx-3qi7t7c&t=182s) um mit PWA zu starten

[Manifest.json generator](https://app-manifest.firebaseapp.com/)

Damit auf Chrome fetch requests auf localhost funkioniert muss eine [Extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related) hinzugefügt werden (nur zu testzwecken)

[Chrome Webserver Extension](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)

[Webpack mit Vue-Guide](https://vuejs.org/v2/guide/installation.html#Direct-lt-script-gt-Include)

[Vue Youtube-Video](https://www.youtube.com/watch?v=78tNYZUS-ps)

[Vue Example Project](https://github.com/prograhammer/vue-example-project)

```
npm install
npm run build
npm run watch
```