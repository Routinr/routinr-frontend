// service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('unique').then((cache) => {
        return cache.addAll(['/', '/index.html', '/main.jsx', '/favicon.ico']);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });