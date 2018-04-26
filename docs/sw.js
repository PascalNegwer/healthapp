importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js');

let revision = (new Date()).toTimeString();
let filesToCache = [
  {
    'url': '/',
    'revision': revision,
  },
  {
    'url': '/main.js',
    'revision': revision,
  },
  {
    'url': '/0.main.js',
    'revision': revision,
  },
  {
    'url': '/1.main.js',
    'revision': revision,
  },
  {
    'url': '/2.main.js',
    'revision': revision,
  },
  {
    'url': '/styles/main.css',
    'revision': revision,
  },
  {
    'url': '/manifest.json',
    'revision': revision,
  },
  {
    'url': '/com/apiomat/apiomat.js',
    'revision': revision,
  },
];

workbox.setConfig({
  debug: true
});
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

workbox.precaching.precacheAndRoute(filesToCache);