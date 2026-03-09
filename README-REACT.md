# Migrasi ke React (Vite)

Perintah instalasi di folder ini:

1. Instal dependensi
```
npm install
```

2. Jalankan mode pengembangan
```
npm run dev
```

3. Build untuk produksi
```
npm run build
```

Struktur penting:
- index.html (Vite entry)
- src/main.jsx (entry React)
- src/App.jsx (markup landing page)
- src/styles/style.css & src/styles/responsive.css (gaya)
- public/assets/icons/favicon.svg (favicon)
- public/image/... (pindahkan gambar Anda ke sini)

Catatan:
- Pindahkan folder `image/` dari proyek lama ke `public/image/` agar semua path gambar `/image/...` tetap berfungsi.
- Navbar sudah fixed transparan via CSS di src/styles/style.css.
