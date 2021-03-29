addEventListener("fetch", (event) => {
  const response = new Response("Hello World test!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});