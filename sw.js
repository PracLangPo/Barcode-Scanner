const cacheName='inventory-cache-v1';
const filesToCache=['./index.html','./sw.js','./manifest.json','https://unpkg.com/quagga@0.12.1/dist/quagga.min.js'];
self.addEventListener('install', e=>{ e.waitUntil(caches.open(cacheName).then(c=>c.addAll(filesToCache)))});
self.addEventListener('fetch', e=>{ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
