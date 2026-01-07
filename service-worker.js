self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("ai-guard-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./dashboard.html",
        "./register.html",
        "./style.css",
        "./script.js"
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
