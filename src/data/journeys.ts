import marcMenonAsset from "@/assets/marc-menon.jpg.asset.json";

export type JourneySection = {
  heading?: string;
  paragraphs: string[];
  callout?: string;
};

export type Journey = {
  slug: string;
  name: string;
  role: string;
  photoUrl: string;
  photoAlt: string;
  quote: string;
  stats: { value: string; label: string }[];
  sections: JourneySection[];
  closing: string;
};

export const journeys: Record<string, Journey> = {
  "marc-menon": {
    slug: "marc-menon",
    name: "Marc Menon",
    role: "Pre-Enlistee, 19",
    photoUrl: marcMenonAsset.url,
    photoAlt: "Marc Menon at a Christmas dinner in 2025",
    quote:
      "Massive shout out to TSA for bringing my 2.4km run from 14+ mins to 11.5 mins over the course of a month, and it helped me pass my pre-enlistee IPPT for the first time! Could not have done it without their structured training programs and persistent motivation. Money very well spent!",
    stats: [
      { value: "14:00 → 11:38", label: "2.4km timing" },
      { value: "67 / 100", label: "IPPT score (61 to pass)" },
      { value: "2.5 weeks", label: "From first session to test day" },
      { value: "2 months", label: "Off his BMT" },
    ],
    sections: [
      {
        heading: "The Starting Line",
        paragraphs: [
          "At a Christmas dinner in 2025, Marc — a family friend — shared his concerns about enlisting into the Physical Training Phase (PTP) intake. Despite multiple attempts, he had been unable to pass his pre-enlistee IPPT. With his next test booked for January 21, 2026, he was determined to clear the benchmark, pass his IPPT, and shorten his Basic Military Training (BMT) by two full months.",
        ],
        callout:
          "I've got IPPT in less than four weeks, and I'm currently stuck at 14:00. How can I pull that down to at least 12:20?",
      },
      {
        heading: "A Chance Meeting at Serangoon Stadium",
        paragraphs: [
          "As fate would have it, a few days later, we bumped into Marc at Serangoon Stadium while finishing our own session. We immediately noticed something off about his training: he was attempting an all-out 2.4km time trial on tired legs and fading heavily before the finish. When we asked what his workout plan was, he simply replied, \"Another 2.4km time trial.\"",
          "We stepped in right away. We had him take a long rest, told him to trust the process, and guided him through a few light strides to end the day.",
        ],
      },
      {
        heading: "The Build",
        paragraphs: [
          "Over the next two and a half weeks, we stayed back after our own workouts to build the best training framework possible with the resources we had. We implemented structured tempo runs, paced him during our cooldowns, analyzed his running mechanics on video, and introduced 1500m-specific intervals. This allowed him to build efficiency and comfortably sustain a pace faster than his target race effort.",
          "His engine was built, and his power and form were sharpened in record time. On test day, the objective was simple: trust the work, and trust himself.",
        ],
      },
      {
        heading: "Test Day",
        paragraphs: [
          "Marc walked out with a massive smile, smashing the passing threshold of 61 points with a score of 67. He achieved an 11:38 on his 2.4km run — scoring 35/50 points on the run component alone and shaving over two minutes off his previous timing in just 2.5 weeks. That single run guaranteed his pass, secured his spot in the Enhanced BMT intake, and saved him two months of active service.",
        ],
        callout:
          "Thank you so much guys, it really means a lot. I couldn't have done it without y'all. I opened up my first 400m pretty quick, and by lap 5 I was exhausted and just hung on for dear life. I was so relieved when I saw the board and saw I ran well under 12 minutes. Thank you so, so much!",
      },
    ],
    closing:
      "Marc's breakthrough was the spark that ignited the foundation of Training Superstar Academy. Outstanding effort, Marc — wishing you all the best for the rest of your NS and beyond!",
  },
};
