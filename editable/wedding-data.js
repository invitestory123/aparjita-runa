/**
 * wedding-data.js — Customer-facing editable data layer for diya-haveli
 * Edit this file to update couple names, dates, events, love story, venue, and photos.
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Aabhash",
    bride: "Aparajita",
    groomFull: "Dr. Aabhash Agrawal",
    brideFull: "Dr. Aparajita Adurti",
    monogram: "A & A",
    tagline: "Two souls, one sacred celebration",
    hashtag: "#AparajitaWedsAabhash",
    slugPrefix: "aparajita-aabhash",
  },

  family: {
    invitationHeading: "|| Shri Ganeshaya Namah ||",
    brideParents: "Mrs. Runa Adurti & Mr. Satyadev Adurti",
    brideBrother: "Mr. Abhishek Adurti",
    brideGrandparents: "Late Dr. U. Sanjeevi & Late Shri A.S.N. Murthy and Late Smt. Arati Banerjee & Shri Chinmoy Banerjee",
    groomParents: "Late Smt. Bharti Agrawal & Dr. Ashok Agrawal",
  },

  wedding: {
    dateLabel: "21 · 11 · 2026",
    timePlace: "The Meriton · New Delhi · Nov 2026",
    datePlaceLabel: "20 & 21 November 2026 · New Delhi",
    dateISO: "2026-11-21T20:00:00+05:30",
    quote: "“Where two souls meet, love blossoms — and every moment becomes a cherished memory.”",
    blessing: "Mrs. Runa Adurti & Mr. Satyadev Adurti along with their son Mr. Abhishek Adurti cordially request the pleasure of your company on the auspicious occasion of the wedding of their beloved daughter Ch. La. Sou. Dr. Aparajita Adurti (Granddaughter of Late Dr. U. Sanjeevi & Late Shri A.S.N. Murthy and Late Smt. Arati Banerjee & Shri Chinmoy Banerjee) with Chi. Dr. Aabhash Agrawal (Son of Late Smt. Bharti Agrawal & Dr. Ashok Agrawal). Your gracious presence and blessings will make this auspicious occasion truly special.",
    openerSubtitle: "Join us as we celebrate our new beginning.",
    countdownTitle: "The wedding celebration begins in",
  },

  eventsTitle: "Two celebrations, woven together.",

  events: [
    {
      name: "Sangeet",
      date: "Friday, 20 November 2026",
      time: "7:00 PM onwards",
      place: "THE MERITON (Mosaic Hall), N.S.I.C. Metro Station, Nehru Place-2, Near Okhla, New Delhi",
      note: "Let the celebrations begin! Join Runa & Satyadev Adurti along with Abhishek as we celebrate our daughter Aparajita and her soon-to-be husband Aabhash for an evening filled with music, dance, laughter and lots of love!",
      start: "2026-11-20T19:00:00+05:30",
      end: "2026-11-20T23:59:00+05:30",
      slug: "sangeet",
    },
    {
      name: "Wedding Ceremony & Dinner",
      date: "Saturday, 21 November 2026",
      time: "Dinner 8:00 PM onwards · Muhurtham 10:05 PM",
      place: "THE MERITON, N.S.I.C. Metro Station, Nehru Place-2, Near Okhla, Shambhu Dayal Bagh, Kalkaji, New Delhi",
      note: "Mrs. Runa Adurti & Mr. Satyadev Adurti along with their son Abhishek cordially request your company at the Wedding of Dr. Aparajita Adurti with Dr. Aabhash Agrawal. Dinner 8:00 PM onwards, auspicious Muhurtham at 10:05 PM.",
      start: "2026-11-21T20:00:00+05:30",
      end: "2026-11-22T02:00:00+05:30",
      slug: "wedding",
    },
  ],

  storyTitle: "Our Love Story",

  story: [
    {
      year: "Post Graduation",
      title: "The First Meeting",
      text: "It all started with a fight during our post-graduation days. What began as a spirited argument soon turned into endless late-night online conversations, effortless laughter, and the spark of an unforgettable friendship.",
      photo: {
        src: "./editable/assets/story-first-meeting.jpg",
        alt: "Aparajita and Aabhash sharing conversations",
        placement: "right",
      },
    },
    {
      year: "The Proposal",
      title: "The Question",
      text: "Popped in a peaceful garden right next to our house. A quiet evening stroll, a question asked from the heart, and the sweetest, easiest 'Yes' that set our forever in motion.",
      photo: {
        src: "./editable/assets/story-question.jpg",
        alt: "A question asked in the garden",
        placement: "below",
      },
    },
    {
      year: "21 November 2026",
      title: "The Beginning",
      text: "Two loving families. Seven sacred vows. The union of Dr. Aparajita and Dr. Aabhash as we step into this lifetime together, guided by love, laughter, and the blessings of everyone dear to us.",
      photo: {
        src: "./editable/assets/story-beginning.jpg",
        alt: "Taking ceremonial steps together around the sacred fire",
        placement: "left",
      },
    },
  ],

  venue: {
    name: "The Meriton",
    address: "N.S.I.C. Metro Station, Nehru Place-2, Near Okhla, Shambhu Dayal Bagh, Kalkaji, New Delhi",
    description: "The Meriton, situated beside NSIC Metro Station, Kalkaji & Okhla, New Delhi — hosting the Sangeet in Mosaic Hall and the auspicious Wedding celebrations.",
    mapsQuery: "The+Meriton+NSIC+Metro+Station+Kalkaji+New+Delhi",
    mapsUrl: "https://share.google/vS5wFcZ7TaosIAfsX",
  },

  music: {
    src: "./editable/assets/bg-music.mp3",
    title: "Seetha Kalyanam",
  },

  images: {
    heroCourtyard: "./editable/assets/palace-courtyard.jpg",
    weddingHands: "./editable/assets/wedding-hands.jpg",
    storyFirstMeeting: "./editable/assets/story-first-meeting.jpg",
    storyQuestion: "./editable/assets/story-question.jpg",
    storyBeginning: "./editable/assets/story-beginning.jpg",
    openerVideo: "./editable/assets/openr.mp4",
    lotusVideo: "./editable/assets/lotus.mp4",
  },
};
