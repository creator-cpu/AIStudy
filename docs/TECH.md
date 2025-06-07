# AIStudy - Texnik tafsilotlar (TECH.md)

Ushbu hujjatda AIStudy loyihasining texnik arxitekturasi, ishlatilgan texnologiyalar, har bir qatlamning vazifasi va qanday qilib ular bir-biriga bog‘langanligi haqida maʼlumot beriladi.

---

## 🧱 Arxitektura qismlari

```
Foydalanuvchi brauzeri
     ↓
chat.html (HTML, CSS, JS)
     ↓
script.js → fetch API
     ↓
Flask server (Python, app.py)
     ↓
OpenAI API (GPT-3.5)
```

---

## 🌐 Frontend

### 📄 Fayllar:

* `index.html` — asosiy sayt sahifasi
* `chat.html` — AI bilan suhbat interfeysi
* `style.css` — dizayn va responsivlik
* `script.js` — foydalanuvchi xabarlarini serverga yuborish va javob chiqarish

### 🔌 JavaScript logikasi:

```javascript
fetch("http://127.0.0.1:5000/ask", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ question: "salom" })
});
```

* `#userInput` elementdan savol olinadi
* Javob kelgach, `#chatContainer` ichiga chiqariladi

---

## 🖥 Backend (Flask)

### 📄 `app.py` fayli

* `/ask` endpoint orqali POST so‘rov qabul qiladi
* OpenAI API’ga `question` ni yuboradi
* Javobni `json` holatda qaytaradi

### 📂 Asosiy kutubxonalar:

* `Flask`
* `flask-cors` — frontend bilan xavfsiz ulanish uchun
* `openai` — GPT API bilan ishlash
* `python-dotenv` — yashirin kalitlar uchun

### 🛡 CORS sozlamasi:

```python
from flask_cors import CORS
CORS(app)
```

Bu frontend (`127.0.0.1`) dan kelgan so‘rovlar bloklanmasligi uchun zarur.

---

## 🔐 Maxfiy kalitlar

API kalit `.env` faylda saqlanadi:

```env
OPENAI_API_KEY=sk-...
```

U `dotenv` kutubxonasi orqali serverga yuklanadi:

```python
from dotenv import load_dotenv
load_dotenv()
```

---

## 🧠 OpenAI API bilan integratsiya

Yangi versiya uchun to‘g‘ri ishlovchi kod:

```python
from openai import OpenAI
client = OpenAI(api_key=api_key)

response = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": question}
  ]
)
```

---

## ✅ Umumiy texnik holat

| Qism          | Holati        |
| ------------- | ------------- |
| Frontend      | Tayyor        |
| Backend       | Tayyor        |
| OpenAI API    | Kvota tugagan |
| Bulutga ulash | Kutilmoqda    |

---

Hamma texnik asoslar tayyor. Endi loyiha deploy qilinishi, va kerak bo‘lsa kengaytirilishi mumkin.
