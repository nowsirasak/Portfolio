# Portfolio

เว็บ Portfolio สไตล์ minimal แบบหน้า Apple Store — React (Create React App) + Framer Motion
รองรับธีมสว่าง/มืดตามระบบ, มือถือ และตั้งค่า "Reduce motion" ของผู้ใช้

## แก้เนื้อหา

ข้อความทั้งหมดอยู่ในไฟล์เดียว: **`src/data.js`** — ชื่อ, ประวัติ, ทักษะ, โปรเจกต์, การศึกษา, ลิงก์โซเชียล
ช่องไหนเว้นว่าง (`""`) จะถูกซ่อนอัตโนมัติ

- **รูปโปรไฟล์**: วางไฟล์ไว้ที่ `public/profile.jpg` แล้วตั้ง `photo: "/profile.jpg"`
- **รูปโปรเจกต์**: วางไว้ที่ `public/projects/` แล้วตั้ง `image: "/projects/xxx.png"`
- **Resume**: วาง `public/resume.pdf` แล้วตั้ง `resume: "/resume.pdf"`
- **ชื่อแท็บ / SEO**: แก้ "Your Name" ใน `public/index.html` และ `public/manifest.json`

## รันบนเครื่อง

```bash
npm install
npm start          # เปิด http://localhost:3000
npm run build      # build สำหรับ production (โฟลเดอร์ build/)
```

## Deploy ขึ้น Vercel (ฟรี — Hobby plan)

### วิธีที่ 1: ผ่าน GitHub (แนะนำ — push แล้ว deploy ใหม่ให้อัตโนมัติ)

1. สร้าง repo ใหม่บน GitHub (เช่น `portfolio`) แล้ว push โค้ด:
   ```bash
   git add .
   git commit -m "Apple-style portfolio with Framer Motion"
   git branch -M main
   git remote add origin https://github.com/<username>/portfolio.git
   git push -u origin main
   ```
2. ไปที่ https://vercel.com → **Sign up with GitHub**
3. **Add New… → Project** → เลือก repo `portfolio` → **Import**
4. Vercel ตรวจเจอ Create React App ให้เอง (มี `vercel.json` กำหนดไว้แล้ว) → กด **Deploy**
5. ได้ลิงก์ `https://portfolio-xxx.vercel.app` — แก้โค้ดแล้ว `git push` ก็อัปเดตเว็บเองทุกครั้ง

### วิธีที่ 2: ผ่าน Vercel CLI

```bash
npm i -g vercel
vercel            # ครั้งแรก: login + ตั้งค่าโปรเจกต์ (preview)
vercel --prod     # deploy ขึ้น production
```

### หมายเหตุ

- Vercel build ด้วย `CI=true` ซึ่งทำให้ **ESLint warning กลายเป็น error** — ถ้า build ไม่ผ่าน
  ให้รัน `set CI=true&& npm run build` (Windows CMD) หรือ `CI=true npm run build` (macOS/Linux) เพื่อดู error บนเครื่องก่อน
- เปลี่ยนชื่อโดเมนได้ที่ Project → Settings → Domains (เช่น `yourname.vercel.app`)
- หลัง deploy แล้ว ใส่ URL ใน `siteUrl` ของ `src/data.js` ได้

## โครงสร้าง

```
src/
  data.js              ← เนื้อหาทั้งหมด (แก้ตรงนี้)
  motion.js            ← ค่า animation ที่ใช้ร่วมกัน
  App.css              ← ดีไซน์ + ธีมสว่าง/มืด
  components/
    Navbar.js          ← แถบเมนูโปร่งแสง + เมนูมือถือ
    Hero.js            ← หัวเว็บ + parallax ตอนเลื่อน
    About.js           ← bento grid
    Skills.js
    Projects.js        ← การ์ดเลื่อนแนวนอนแบบ Apple Store
    Education.js       ← timeline ที่วาดเส้นตามการเลื่อน
    Contact.js
    Footer.js
vercel.json            ← ตั้งค่า build + cache headers
```
