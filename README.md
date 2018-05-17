# Installation
```
git clone https://github.com/PascalNegwer/healthapp.git
cd healthapp
npm install -g gulp
npm install
gulp
```

durch den Befehl "gulp" wir ein Ordner ./docs/test erstellt.
In diesem Ordner finden sich alle fertig generierten Dateien, wie sie auch auf dem Server gehostet sind und an den User ausgegeben werden.

Lokal sollte der DocumentRoot auf den Ordner "docs" gesetzt werden. Das zwischenverzeichnis "test" ist leider notwendig, da auf unserem Mittwald-Server ebenfalls ein Subdirectory besteht und der ServiceWorker den genauen Pfad braucht.

Z.B. mit der [Chrome Webserver Extension](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb) muss dann also der Ordner "docs" als Root genommen werden.


# Zusatzinformationen

Wenn man mit einem selbst-signierten Zertifikat unterwegs ist muss man in einem neuen Fenster die Überprüfung des Zertifikats abstellen
```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir=/tmp/foo --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://pwa.test
```

Ein sehr gutes [Tutorial](https://www.youtube.com/watch?v=gcx-3qi7t7c&t=182s) um mit PWA zu starten

[Manifest.json generator](https://app-manifest.firebaseapp.com/)

Damit auf Chrome fetch requests auf localhost funkioniert muss eine [Extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related) hinzugefügt werden (nur zu testzwecken)

[Webpack mit Vue-Guide](https://vuejs.org/v2/guide/installation.html#Direct-lt-script-gt-Include)

[Vue Youtube-Video](https://www.youtube.com/watch?v=78tNYZUS-ps)

[Vue Example Project](https://github.com/prograhammer/vue-example-project)

[Apiomat Login](https://epdemo.apiomat.enterprises/site/login)

[Apiomat Doku](https://epdemo.apiomat.enterprises/docs/)
[Apiomat Video](https://www.youtube.com/channel/UCJk_PHy7ZruxXTM718gDf7Q)