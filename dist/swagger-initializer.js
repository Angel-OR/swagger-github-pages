window.onload = function() {
  window.ui = SwaggerUIBundle({
    urls: [
      { url: "/swagger/Process/swagger.yaml", name: "Process" },
      { url: "/swagger/Catalog/swagger.yaml", name: "Catalog" },
      { url: "/swagger/Security/swagger.yaml", name: "Security" }
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
