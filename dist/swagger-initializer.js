window.onload = function() {
  window.ui = SwaggerUIBundle({
    urls: [
      { url: "/swagger/Process/swagger.yaml", name: "Process API" },
      { url: "/swagger/Catalog/swagger.yaml", name: "Catalog API" },
      { url: "/swagger/Security/swagger.yaml", name: "Security API" }
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
