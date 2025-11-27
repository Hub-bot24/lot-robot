self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("lot-robot-cache").then(cache => {
      return cache.addAll(["/", "index.html", "styles.css", "app.js", "manifest.json", "icon.png"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});