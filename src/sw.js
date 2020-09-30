var cacheName = 'appV1';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll([
                '/main.js',
                'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2',
                '/',
            ]))
    );
});

self.addEventListener('fetch', function (event) {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request)
                .then(function (response) {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
                )
        );
    }
});