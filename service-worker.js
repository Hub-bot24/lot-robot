self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("lot-robot-cache").then(cache => {
      return cache.addAll([
        "/lot-robot/",
        "/lot-robot/index.html",
        "/lot-robot/styles.css",
        "/lot-robot/app.js",
        "/lot-robot/icon.png",
        "/lot-robot/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
