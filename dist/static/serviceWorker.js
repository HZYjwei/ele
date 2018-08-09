const CACHENAME = 'eleCache'

console.log(1)

self.addEventListener('install', () => {
  caches.delete(CACHENAME)
})
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response
        }
        var fetchRequest = event.request.clone()
        return fetch(fetchRequest)
          .then((response) => {
            if (!response || response.status !== 200 || !response.headers.get('Content-type').match(/image/)) {
              return response
            }
            var responseToCache = response.clone()
            caches.open(CACHENAME)
              .then((cache) => {
                cache.put(event.request, responseToCache)
              })

            return response
          })
      })
  )
})
