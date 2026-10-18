# Customer Editing Guide — Dr. Aparajita & Dr. Aabhash (diya-haveli)

This template is a luxury wedding invitation featuring an interactive lamp-lighting (press-and-hold diya) ritual, animated word-by-word quotes, love story timeline, celebration itinerary with .ics calendar downloads, live countdown timer, background music player, and embedded Google Maps venue card.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///c:/invitestory/week7/aparjita-runa/editable/wedding-data.js)

### Couple Details
Edit `couple` in `editable/wedding-data.js`:
- `groom` & `bride`: First names (`"Aabhash"`, `"Aparajita"`)
- `groomFull` & `brideFull`: Full formal names (`"Dr. Aabhash Agrawal"`, `"Dr. Aparajita Adurti"`)
- `monogram`: Couple initials or monogram (`"A & A"`)
- `tagline`: Tagline subtitle
- `hashtag`: Couple wedding hashtag (`"#AparajitaWedsAabhash"`)

### Family Details & Blessings
Edit `family` & `wedding.blessing` in `editable/wedding-data.js`:
- Inviting: Mrs. Runa Adurti & Mr. Satyadev Adurti along with Abhishek Adurti
- Grandparents: Late Dr. U. Sanjeevi & Late Shri A.S.N. Murthy and Late Smt. Arati Banerjee & Shri Chinmoy Banerjee
- Groom's Parents: Late Smt. Bharti Agrawal & Dr. Ashok Agrawal

### Wedding Date & Hero
Edit `wedding` in `editable/wedding-data.js`:
- `dateLabel`: Formatted short date string (`"21 · 11 · 2026"`)
- `timePlace`: Subheading label (`"The Meriton · New Delhi · Nov 2026"`)
- `dateISO`: Event timestamp in ISO 8601 (`"2026-11-21T20:00:00+05:30"`). Directly drives the live countdown timer.

### Events & Ceremonies
Edit `events` array in `editable/wedding-data.js`:
- **Sangeet**: Friday, 20 November 2026, 7:00 PM onwards at Mosaic Hall, The Meriton, Okhla
- **Wedding Ceremony & Dinner**: Saturday, 21 November 2026, Dinner 8:00 PM onwards, Muhurtham 10:05 PM at The Meriton, Okhla

### Love Story Chapters
Edit `story` array in `editable/wedding-data.js`:
1. **The First Meeting** (Post Graduation): Started with a fight during post-graduation turning into late-night online conversations.
2. **The Question** (The Proposal): Popped in a garden right next to our house.
3. **The Beginning** (21 November 2026): Two families, one sacred bond, seven vows.

### Venue & Map
Edit `venue` in `editable/wedding-data.js`:
- `name`: `"The Meriton"`
- `address`: `"N.S.I.C. Metro Station, Nehru Place-2, Near Okhla, Shambhu Dayal Bagh, Kalkaji, New Delhi"`
- `mapsQuery`: Query for Google Maps embed and directions link
- `mapsUrl`: Google Maps directions link

### Background Music
- Background song: "Seetha Kalyanam"
- Audio file: `editable/assets/bg-music.mp3`
- Floating interactive music toggle in top right corner.
