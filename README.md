# html-css-tools-pec3

Antes de la primera iteración:

- Configurar `sharp` para reducir el tamano de la imágenes. `"quality": 50`

- Establecer el atributo `loading="lazy"` en las imágenes que no se aparecen en el inicio de la página.

- Establecer el atributo `async` en la etiqueta `<script async type="module" src="app/app.js"></script>`

Después de la segunda iteración:

npm install -dev @parcel/compressor-gzip @parcel/compressor-brotli

.parcelrc:

```
{
  "compressors": {
    "*.{html,css,js,svg,map}": [
      "...",
      "@parcel/compressor-gzip",
      "@parcel/compressor-brotli"
    ]
  }
}
```

git
