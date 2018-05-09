self.addEventListener('install', evt => {
    console.log('INSTALLING....');

    evt.waitUntil(
        Promise.resolve()
            .then(() => console.log('INSTALLED'))
    );
});

self.addEventListener('activate', evt => {
    console.log('ACTIVATING....');

    evt.waitUntil(
        Promise.resolve()
            .then(() => console.log('ACTIVATED'))
    );
});

self.addEventListener('fetch', evt => {
    console.log('Request initiated to: ', evt.request.url);

    evt.respondWith(fetch(evt.request));
});
