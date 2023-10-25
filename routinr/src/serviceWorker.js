const CACHE_NAME = 'Routinr';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/src/views/HomePage.jsx',
        '/src/css/App.css',
        '/src/views/authentication/Signup.jsx',
        '/src/views/authentication/Login.jsx',
        // Add other assets to cache as needed
      ]);
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
