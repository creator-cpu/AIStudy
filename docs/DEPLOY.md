# AIStudy - Loyihani internetga chiqarish (DEPLOY.md)

Ushbu hujjatda AIStudy chatbot loyihasini **bulut serveriga joylash (deploy qilish)** jarayoni bosqichma-bosqich tushuntiriladi. Maqsad — loyihani shunday holatga keltirishki, uni boshqalar ham internet orqali ishlatib ko‘ra olsin.

---

## 🗂 Deploy qilinadigan qismlar

| Qism     | Platforma                   | Holat                      |
| -------- | --------------------------- | -------------------------- |
| Frontend | Vercel                      | ✅ Yengil va bepul          |
| Backend  | Render.com yoki Railway.app | ✅ Flask server uchun ideal |

---

## ✅ Frontendni Vercel'ga yuklash

### 1. Vercel.com saytiga o‘ting:

👉 [https://vercel.com](https://vercel.com)

* Google bilan kirish yoki hisob yarating

### 2. Yangi loyiha yarating

* `New Project` → `Import` tugmasini bosing
* GitHub yoki lokal fayllarni ulang (faqat `frontend` papkani tanlang)

### 3. `index.html` ni asosiy fayl sifatida tanlang

### 4. `foto/` papkani yuklashni unutmang

### 5. Deploy tugagach, sizga quyidagidek link beriladi:

```
https://aistudy.vercel.app
```

---

## ✅ Backendni Render.com orqali yuklash

### 1. Saytga kiring:

👉 [https://render.com](https://render.com)

### 2. `New Web Service` tugmasini bosing

* Repository tanlang yoki zip qilib yuklang
* `Start Command:` sifatida quyidagini yozing:

```
python app.py
```

### 3. Muqobil variant: Railway.app

👉 [https://railway.app](https://railway.app) — ko‘proq avtomatlashtirilgan sozlashlarga ega

---

## 📁 .env faylni yashirish

* Render yoki Railway platformasida `.env` faylni to‘g‘ridan-to‘g‘ri kiriting:

  * OPENAI\_API\_KEY: `sk-...`
* Vercel frontendda bu fayl **kerak emas** — API kalit faqat backendda qoladi

---

## 🌐 Frontend va backendni ulash

* Frontenddagi `script.js` faylida quyidagicha URL bo‘lishi kerak:

```javascript
fetch("https://aistudy-backend.onrender.com/ask", {
  method: "POST",
  ...
})
```

* `127.0.0.1` o‘rniga **backend joylashgan haqiqiy domen** bo‘lishi shart!

---

## 📦 Yakuniy natija

* Frontend — Vercel’da: `https://aistudy.vercel.app`
* Backend — Render’da: `https://aistudy-backend.onrender.com`

Foydalanuvchi chat ochadi → savol yuboradi → Flask server → OpenAI API → Javob qaytadi → Ekranga chiqariladi ✅

---

## 🧪 Testdan so‘ng

* CORS muammosi bo‘lsa `flask_cors` bilan ruxsat beriladi
* Faviconlar, rasmlar to‘g‘ri chiqsin uchun `foto/` yo‘li tekshiriladi

---

Deployment muvaffaqiyatli amalga oshirilgach, loyiha dunyoga ochiladi 🎉
