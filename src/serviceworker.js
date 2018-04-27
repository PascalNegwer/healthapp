importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js');

let revision = (new Date()).toTimeString();
let filesToCache = [
  {
    'url': '/assets/css/main.css',
    'revision': revision,
  },
  {
    'url': '/assets/img/logo.svg',
    'revision': revision,
  },

  {
    'url': '/assets/img/bg_0.png',
    'revision': revision,
  },

  {
    'url': '/assets/img/bg_1.png',
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
    'url': '/3.main.js',
    'revision': revision,
  },
  {
    'url': '/4.main.js',
    'revision': revision,
  },
  {
    'url': '/5.main.js',
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

workbox.routing(
  new RegExp('https://storage.googleapis.com/*'),
  workbox.strategies.staleWhileRevalidate()
);