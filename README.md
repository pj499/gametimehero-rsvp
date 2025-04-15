# 🎟️ Gametime Hero RSVP Manager

A clean, scalable RSVP management interface built with **React**, **TypeScript**, and **Tailwind CSS** — designed for the [Gametime Hero](https://www.gametimehero.com/) coding challenge. This project allows event organizers to track player RSVPs with ease, view attendance stats, and make live updates.

---

## 🧩 Features

✅ Add a new player with an RSVP status  
✅ Update RSVP status directly from the attendee list  
✅ View confirmed attendees  
✅ Live attendance statistics (total, confirmed, declined)  
✅ Clean and testable service architecture using `RsvpService`  

---

## ✨ Tech Stack

- ⚛️ **React + TypeScript**
- 🎨 **Tailwind CSS** for styling
- 🔄 Pure service logic via `RsvpService.ts`
- 📐 Built with clean architecture principles (SRP, reusable interfaces, dependency injection)

---

## 📸 Preview

![image](https://github.com/user-attachments/assets/6817387d-a642-4808-b5cf-a7b771d49da6)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/pj499/gametimehero-rsvp.git
cd gametimehero-rsvp-ui
```

### 2: Install Dependencies
```bash
npm install
```

### 3: Start the Development Server
```bash
npm run dev
```
Your app should now be running at http://localhost:5173

## 📦 Project Structure
```bash
src/
├── components/         # UI components (Form, Stats, Lists)
├── interfaces/         # TypeScript interfaces (Player, RsvpEntry)
├── services/           # Business logic (RsvpService.ts)
├── utils/              # Logger utility
├── App.tsx             # Main UI layout
├── main.tsx            # React app entry point
├── index.css           # Tailwind base styles
```

Built with 💙 by Prajakta


