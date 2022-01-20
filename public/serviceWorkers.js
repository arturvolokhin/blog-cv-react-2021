/* eslint-disable */

const staticCacheName = 'v1';

const assetUrls = [
  '/favicon.ico',
  '../src/index.js'
]

self.addEventListener("install", (event) => {
  console.log("sw install");
  event.waitUntil(
    caches.open(staticCacheName).then(cache => cache.addAll(assetUrls))
  )
});

self.addEventListener("install", (event) => {
  console.log("sw activate");
});
