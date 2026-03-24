const CACHE_NAME = 'upsc-pyq-v1';
const ASSETS = [
  './',
  './index.html',
  './polity-tracker.html',
  './economics-tracker.html',
  './environment-tracker.html',
  './science-tracker.html',
  './current-affairs-tracker.html',
  './polity-questions-complete.js',
  './forumias-mains-questions.js',
  './polity-data.js',
  './polity-app.js',
  './economics-questions.js',
  './economics-data.js',
  './economics-app.js',
  './environment-questions.js',
  './environment-mains-questions.js',
  './environment-data.js',
  './environment-app.js',
  './science-questions-complete.js',
  './science-mains-questions.js',
  './science-data.js',
  './science-app.js',
  './current-affairs/ca-march-2025.js'
];

// Install: cache all assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: serve from cache first, fall back to network
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        // Cache new requests dynamically
        if (response.ok && e.request.method === 'GET') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      });
    }).catch(() => caches.match('./index.html'))
  );
});
