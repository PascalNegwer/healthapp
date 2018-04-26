importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js');

let revision = (new Date()).toTimeString();
let filesToCache = [
  {
    'url': 'assets/css/main.css',
    'revision': revision,
  },
  {
    'url': '/0.main.js',
    'revision': revision,
  },
  {
    'url': '/apiomat.js',
    'revision': revision,
  },
  {
    'url': '/',
    'revision': revision,
  },
  {
    'url': '/main.js',
    'revision': revision,
  },
  {
    'url': '/manifest.json',
    'revision': revision,
  },
];

workbox.setConfig({
  debug: true
});
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

workbox.precaching.precacheAndRoute(filesToCache);