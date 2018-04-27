importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js');

let revision = (new Date()).toTimeString();
let filesToCache = [
  {
    'url': '/test/assets/css/main.css',
    'revision': revision,
  },
  {
    'url': '/test/assets/img/logo.svg',
    'revision': revision,
  },

  {
    'url': '/test/assets/img/bg_0.png',
    'revision': revision,
  },

  {
    'url': '/test/assets/img/bg_1.png',
    'revision': revision,
  },
  {
    'url': '/test/0.main.js',
    'revision': revision,
  },
  {
    'url': '/test/1.main.js',
    'revision': revision,
  },
  {
    'url': '/test/2.main.js',
    'revision': revision,
  },
  {
    'url': '/test/3.main.js',
    'revision': revision,
  },
  {
    'url': '/test/4.main.js',
    'revision': revision,
  },
  {
    'url': '/test/5.main.js',
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

workbox.setConfig({
   debug: true
});
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

workbox.precaching.precacheAndRoute(filesToCache);

workbox.routing.registerRoute(
  new RegExp('https://storage.googleapis.com/*'),
  workbox.strategies.staleWhileRevalidate()
);