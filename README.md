# AIStudy

AIStudy — bu sunʼiy intellekt yordamida ishlovchi o‘quvchi-assistent chatbot. U foydalanuvchidan savollarni qabul qiladi va OpenAI API orqali javob beradi. Bu loyiha HTML, CSS, JavaScript va Python (Flask) asosida qurilgan.

## 📌 Loyihaning qisqacha maʼlumoti
- **Loyiha nomi:** AIStudy
- **Asosiy maqsad:** Minimal chatbot MVP (Minimal Working Product) yaratish
- **Holati:** Ishlab chiqilmoqda (API cheklovi tufayli vaqtincha to‘xtagan)
- **Maʼmur:** Sarvar 

## 🚀 Asosiy funksiyalar
- Zamonaviy, mobilga mos chat interfeysi
- Foydalanuvchi savollarini OpenAI orqali tahlil qilish
- Real vaqt rejimida javob qaytarish
- HTML/CSS bilan yaratilgan soddaligi va tushunarli dizayn

## 📂 Papkalar tuzilmasi
```
AIstudy/
├── backend/                  # Flask server va API ulanish
│   ├── app.py
│   ├── .env                  # OpenAI API kaliti
│   └── requirements.txt
├── frontend/                # Foydalanuvchi interfeysi (sayt)
│   ├── index.html
│   ├── chat.html
│   ├── style.css
│   ├── script.js
│   └── foto/                 # Rasmlar, faviconlar va logotiplar
├── docs/                    # Hujjatlar
│   └── README.md
```

## 🧠 Texnologiyalar
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python + Flask
- **AI modeli:** OpenAI GPT-3.5-turbo
- **API kalit:** `.env` fayl orqali yashirin saqlanadi

## 🛠 Ishga tushirish bo‘yicha yo‘riqnoma
1. Loyihani yuklab oling
2. `backend` papkaga o‘ting
3. Quyidagilarni terminalda bajaring:
   ```bash
   pip install -r requirements.txt
   ```
4. `.env` faylga API kalitingizni yozing:
   ```env
   OPENAI_API_KEY=bu_yerga_api_kalitni_yozing
   ```
5. Flask serverni ishga tushiring:
   ```bash
   python app.py
   ```

## ⚠️ Hozirgi cheklovlar
- API kaliti uchun kvota tugagan
- Testlar vaqtincha to‘xtagan
- Bulutga yuklash (Render/Vercel) rejalashtirilmoqda

## 👤 Muallif haqida
**Sarvar**  
Sunʼiy intellekt va taʼlimga qiziquvchi o‘smir dasturchi

---

📩 Takliflaringiz bo‘lsa, mamnuniyat bilan qabul qilaman!
# AIStudy
