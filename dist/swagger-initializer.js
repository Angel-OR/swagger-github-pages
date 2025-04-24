window.onload = function() {
  window.ui = SwaggerUIBundle({
    urls: [
      { url: "swagger-process.yaml", name: "Process" },
      { url: "swagger-catalog.yaml", name: "Catalog" },
      { url: "swagger-security.yaml", name: "Security" }
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });
};
