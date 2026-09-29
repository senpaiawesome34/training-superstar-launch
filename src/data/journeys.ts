import marcMenonAsset from "@/assets/marc-menon.jpg.asset.json";
import marcTrainingRunAsset from "@/assets/marc-training-run.jpg.asset.json";
import marcIpptResultsAsset from "@/assets/marc-ippt-results.jpg.asset.json";
import enzoLimAsset from "@/assets/enzo-lim.jpg.asset.json";
import enzoAwardsAsset from "@/assets/enzo-awards.jpg.asset.json";
import enzoIpptResultAsset from "@/assets/enzo-ippt-result.jpg.asset.json";

export type JourneySection = {
  heading?: string;
  paragraphs: string[];
  callout?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageCaption?: string;
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
        imageUrl: marcTrainingRunAsset.url,
        imageAlt: "Marc's 2.4km training run recorded before his IPPT breakthrough",
        imageCaption: "A 2.4km training run from the weeks before Marc’s test.",
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
        imageUrl: marcIpptResultsAsset.url,
        imageAlt: "Marc's IPPT results showing 38 sit-ups, 24 push-ups and an 11 minute 38 second 2.4km run",
        imageCaption: "The result: 38 sit-ups, 24 push-ups and an 11:38 2.4km run — 67 points and a pass.",
      },
    ],
    closing:
      "Marc's breakthrough was the spark that ignited the foundation of Training Superstar Academy. Outstanding effort, Marc — wishing you all the best for the rest of your NS and beyond!",
  },
  "enzo-lim": {
    slug: "enzo-lim",
    name: "Enzo Lim",
    role: "NSF, 19",
    photoUrl: enzoLimAsset.url,
    photoAlt: "Enzo Lim in uniform, saluting after completing Specialist Cadet School",
    quote:
      "The training sessions let me micro manage my running form and allowed me to push my mental to my limits during the workouts. TSA is ultra observant and is able to fine tune me to be as efficient as possible and that helped me every aspect of my running. The workouts are also perfectly catered to improve the anaerobic and aerobic fitness of the 2.4km",
    stats: [
      { value: "8:51 → 8:13", label: "2.4km timing" },
      { value: "100 / 100", label: "IPPT score" },
      { value: "3 weeks", label: "To his first perfect score" },
      { value: "2 awards", label: "SCS honours earned" },
    ],
    sections: [
      {
        heading: "A Chance Meeting",
        paragraphs: [
          "We first ran into Enzo by chance in March 2026, during a ride home on the East-West MRT Line. He was then still a cadet who had just booked out from his first week of Specialist Cadet School (SCS). Among the small group of soldiers he was with, Enzo stood out instantly through his infectious energy and relentless enthusiasm, and we quickly struck a chord from the get-go.",
          "It became apparent that this was an encounter with someone unique — a cut above the rest — who brought instant value to the current training squad. Likewise, Enzo realised that we were the missing piece in the puzzle to achieving his NS goals. As the saying goes, the rest is history.",
        ],
      },
      {
        heading: "A Clear Ambition",
        paragraphs: [
          "Enzo had been living in the USA for most of his life and had only recently returned to Singapore to complete his National Service due to his Singapore citizenship. He was searching for a local training group, as the move left him out of shape and unacclimatised to the tropical heat and humidity. His best BMT IPPT 2.4km timing was 8:51 — a far cry from his true potential.",
          "The then-95-pointer made his intentions clear: become the fittest soldier in his SCS intake, score 100 points for IPPT, and go beyond. His base was already there from years of experience across multiple sports, but through TSA, he became even stronger and took his game to a whole new level.",
          "Enzo was instantly set on getting fitter, showing up for a TSA session the very next day. This displayed the exemplary attitude and character he naturally embodied, truly demonstrating the ethos of a Training Superstar. From the get-go, his intention was clear: be the best soldier in the whole of SCS and smash the 8:30 mark for the 2.4km run. He wasted no time showing his intent and went on to smash every target.",
        ],
      },
      {
        heading: "The Elite Training Group",
        paragraphs: [
          "As one of our high-level athletes, Enzo joined the Elite Training Group and trained alongside national-level partners, including some of the best distance runners in the nation.",
          "He also received extensive form analysis and gait refinement from our meticulous coaches. The tailored workouts helped him boost his fitness tremendously as he pushed further than ever before. This sharpened him specifically for the IPPTs during the SCS Foundation Term, with our coaches planning a meticulously timed peak.",
        ],
      },
      {
        heading: "Top of His Cohort",
        paragraphs: [
          "Enzo completed SCS with two major awards: the SCS Foundation Term School Best, earned by finishing as the top cadet in his entire cohort, and the Best in Physical Training (PT) award.",
        ],
        imageUrl: enzoAwardsAsset.url,
        imageAlt: "Enzo's SCS School Best and Best in Physical Training award plaques",
        imageCaption: "Two major SCS honours: Foundation Term School Best and Best in Physical Training.",
      },
      {
        heading: "A Perfect 100",
        paragraphs: [
          "Enzo earned an unbeatable maximum score of 100/100 for IPPT on his first try in April — just three weeks after joining TSA. He smashed the 8:30 2.4km barrier by a massive 17 seconds, clocking 8:13 alongside 60 sit-ups and 68 push-ups.",
        ],
        callout:
          "Definitely many things to learn with every passing day and experience!!",
        imageUrl: enzoIpptResultAsset.url,
        imageAlt: "Enzo's IPPT result showing 60 sit-ups, 68 push-ups, an 8 minute 13 second 2.4km run and 100 total points",
        imageCaption: "The perfect score: 60 sit-ups, 68 push-ups and an 8:13 2.4km run — 100 points and Gold.",
      },
    ],
    closing:
      "Enzo, we are hugely glad and honoured to have been part of your journey. Massive congratulations on becoming TSA's first Coached — not Poached — 100-pointer. We wish you nothing but the best as you move forward as a Commander of the SAF!",
  },
};
