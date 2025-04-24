window.onload = function() {
  window.ui = SwaggerUIBundle({
    urls: [
      { url: "Process_swagger.yaml", name: "Process" },
      { url: "Catalog_swagger.yaml", name: "Catalog" },
      { url: "Security_swagger.yaml", name: "Security" }
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
