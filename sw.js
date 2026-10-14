
"use strict";

const CACHE_PREFIX = "liya-cache-";
const CACHE_VERSION = "v2";
const CACHE_NAME = `${CACHE_PREFIX}${CACHE_VERSION}`;

const BASE_PATH = "/LIYA/";

const APP_SHELL = [
  BASE_PATH,
  `${BASE_PATH}index.html`,
  `${BASE_PATH}manifest.json`
];

// Cloudflare AI backend
const AI_API_ORIGIN = "https://liya-ai.thismohammed27.workers.dev";

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      // Install the new version only if the app shell can be cached.
      await cache.addAll(APP_SHELL);

      // Do not activate until the new cache has been prepared.
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheKeys = await caches.keys();

      await Promise.all(
        cacheKeys
          .filter(
            (key) =>
              key.startsWith(CACHE_PREFIX) &&
              key !== CACHE_NAME
          )
          .map((key) => caches.delete(key))
      );

      // Take control of open LIYA pages after activation.
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Only handle GET requests. Never intercept POST or other methods.
  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  // AI API must always use the network.
  // Do not cache API requests or AI responses.
  if (url.origin === AI_API_ORIGIN) {
    return;
  }

  // Do not intercept third-party resources.
  if (url.origin !== self.location.origin) {
    return;
  }

  // Only handle files belonging to the /LIYA/ application.
  if (!url.pathname.startsWith(BASE_PATH)) {
    return;
  }

  // Navigation requests: try network first, then offline fallback.
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);

          if (response.ok) {
            const cache = await caches.open(CACHE_NAME);

            // Keep a copy of the latest successful HTML page.
            await cache.put(
              `${BASE_PATH}index.html`,
              response.clone()
            );
          }

          return response;
        } catch {
          const cachedPage = await caches.match(
            `${BASE_PATH}index.html`
          );

          if (cachedPage) {
            return cachedPage;
          }

          return new Response(
            "LIYA is offline. Please connect to the internet and try again.",
            {
              status: 503,
              headers: {
                "Content-Type": "text/plain; charset=UTF-8"
              }
            }
          );
        }
      })()
    );

    return;
  }

  // Static application files: network first, cached copy if offline.
  event.respondWith(
    (async () => {
      try {
        const response = await fetch(request);

        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);

          await cache.put(request, response.clone());
        }

        return response;
      } catch {
        const cachedResponse = await caches.match(request);

        if (cachedResponse) {
          return cachedResponse;
        }

        return new Response("Resource unavailable offline.", {
          status: 503,
          headers: {
            "Content-Type": "text/plain; charset=UTF-8"
          }
        });
      }
    })()
  );
});
