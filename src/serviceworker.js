importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js');

let revision = '1.0';//(new Date()).toTimeString();
let filesToCache = [
  {
    'url': '/test/assets/css/main.css',
    'revision': revision,
  },
  {
    'url': '/test/assets/img/bg_blue.png',
    'revision': revision,
  },
  {
    'url': '/test/assets/img/bg_default.png',
    'revision': revision,
  },
  {
    'url': '/test/assets/img/bg_mixed.png',
    'revision': revision,
  },
  {
    'url': '/test/assets/img/bg_orange.png',
    'revision': revision,
  },
  {
    'url': '/test/assets/img/bg_purple.png',
    'revision': revision,
  },
  {
    'url': '/test/assets/img/logo.svg',
    'revision': revision,
  },
  {
    'url': '/test/assets/img/offline.jpg',
    'revision': revision,
  },
  {
    'url': '/test/assets/img/setup.png',
    'revision': revision,
  },
  {
    'url': '/test/assets/fonts/wrkFit.svg',
    'revision': revision,
  },
  {
    'url': '/test/assets/fonts/wrkFit.ttf',
    'revision': revision,
  },
  {
    'url': '/test/assets/fonts/wrkFit.woff',
    'revision': revision,
  },
  {
    'url': '/test/apiomat.js',
    'revision': revision,
  },
  {
    'url': '/test/',
    'revision': revision,
  },
  {
    'url': '/test/main.js',
    'revision': revision,
  },
  {
    'url': '/test/manifest.json',
    'revision': revision,
  },
];

workbox.setConfig({debug: false});

workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

workbox.precaching.precacheAndRoute(filesToCache);

workbox.routing.registerRoute(
  new RegExp('https://storage.googleapis.com/*'),
  workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.gstatic.com/*'),
    workbox.strategies.staleWhileRevalidate()
);
