# AIStudy - MVP (Minimal Working Product) hujjati

## 🎯 Maqsad

Ushbu hujjat AIStudy chatbot loyihasining minimal ishlaydigan mahsulot (MVP) versiyasini aniqlash, tavsiflash va tekshirish uchun yaratilgan. MVP versiya orqali foydalanuvchi sunʼiy intellektga savol berishi va javob olishi mumkin.

---

## 📌 MVP nima uchun kerak?

* Dastlabki ishlovchi versiyani test qilish
* Real foydalanuvchilardan fikr olish
* Investitsiya yoki grant uchun namoyish qilish

---

## ⚙️ MVP tarkibidagi asosiy komponentlar

| Komponent   | Vazifasi                                     | Holati           |
| ----------- | -------------------------------------------- | ---------------- |
| `chat.html` | Chat interfeys - foydalanuvchi savol yozadi  | ✅ Tayyor         |
| `style.css` | Chat sahifa dizayni                          | ✅ Tayyor         |
| `script.js` | Savolni serverga yuborish, javobni chiqarish | ✅ Tayyor         |
| `app.py`    | Flask server - API endpoint (`/ask`)         | ✅ Tayyor         |
| OpenAI API  | GPT-3.5 modeli orqali chatbot javobini olish | ⚠️ Quota tugagan |
| `.env`      | API kalitni yashirin saqlash                 | ✅ Tayyor         |

---

## 📄 Ishlash tartibi (MVP flow)

1. Foydalanuvchi `chat.html` orqali savol yozadi
2. `script.js` bu savolni `http://127.0.0.1:5000/ask` manzilga `POST` qiladi
3. `app.py` bu savolni OpenAI API'ga yuboradi
4. OpenAI javobini olgach, backend orqali frontendga yuboradi
5. Foydalanuvchi chat oynasida javobni ko‘radi

---

## ✅ MVP versiya orqali sinab ko‘rish

* Flask server ishga tushgan bo‘lishi kerak
* API kalit ishlayotgan bo‘lishi kerak
* Brauzerda `chat.html` ochiladi
* Savol yoziladi va real GPT javobi olinadi

> Eslatma: Hozirda API kvotasi tugagani sababli, GPT javobi ishlamaydi. Ammo frontend va server logikasi to‘liq tayyor.

---

## 🔚 Xulosa

* MVP chatbot oddiy, lekin asosiy funksiyani bajaradi: **savol-javob orqali o‘rganish**
* Keyingi bosqichda API qayta yoqiladi va bulutga yuklanadi (Render/Vercel)
* Fikr va test natijalari asosida yangi funksiyalar qo‘shiladi
