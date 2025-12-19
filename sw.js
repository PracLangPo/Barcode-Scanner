const cacheName = 'inventory-cache-v1';
const filesToCache = [
    './inventory.html',
    './sw.js',
    './manifest.json',
    'https://unpkg.com/quagga@0.12.1/dist/quagga.min.js',
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(filesToCache))
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
