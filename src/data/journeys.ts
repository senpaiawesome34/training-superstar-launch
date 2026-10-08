// marc's photos
import marcMenonAsset from "@/assets/marc-menon.jpg.asset.json";
import marcTrainingRunAsset from "@/assets/marc-training-run.jpg.asset.json";
import marcIpptResultsAsset from "@/assets/marc-ippt-results.jpg.asset.json";

// enzo's photos
import enzoLimAsset from "@/assets/enzo-lim.jpg.asset.json";
import enzoAwardsAsset from "@/assets/enzo-awards.jpg.asset.json";
import enzoIpptResultAsset from "@/assets/enzo-ippt-result.jpg.asset.json";

// song quek's photos
import songQuekAsset from "@/assets/songQuekAsset.jpeg";
// import songTrainingAsset from "@/assets/song-training.jpg";
import songResultAsset from "@/assets/songResultAsset.jpeg";

// shun yuan's photos
import shunYuanAsset from "@/assets/shun-yuan.png.asset.json";
import shunyuanResultAsset from "@/assets/shunyuanResultAsset.jpeg"

// jared's photos
import jaredAsset from "@/assets/jaredAsset.jpg"

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
  // marc's writeup
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

  // enzo's writeup
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
      "He expressed his humility and gratitude even after achieving his goal of being the fittest soldier in his batch by a country mile. Enzo, we are hugely glad and honoured to have been part of your journey. Massive congratulations on becoming TSA's first Coached — not Poached — 100-pointer. We wish you nothing but the best as you move forward as a Commander of the SAF!",
  },

  // song quek's writeup
  "song-quek": {
    slug: "song-quek",
    name: "Song Quek",
    role: "NSF, 22",
    photoUrl: songQuekAsset,
    photoAlt: "Song Quek at the track",
    quote:
      "I was a sub 9min 2.4km runner and trained for quite long to achieve it. However, my IPPT was in the next week and I needed to hit a sub 8min 30s. It felt impossible to me until I met TSA. Within that short week, I was given a personalized schedule tailored to helping me cut down to the timing required. During training, the coach helped me to correct minute details such as my running form and my pacing which miraculously shaved my timing down to 8min and 25s on the day of my IPPT. TSA is very professional and easy to work with, 100% would recommend.",
    stats: [
      { value: "8:59 → 8:25", label: "2.4km timing" },
      { value: "100 / 100", label: "IPPT score" },
      { value: "1 week", label: "Training duration" },
      { value: "100-Pointer Plaque", label: "NS Unit Honour" },
    ],
    sections: [
      {
        heading: "Another Chance Meeting at Serangoon Stadium",
        paragraphs: [
          "Song Quek approached TSA out of the blue, during a totally random encounter at Serangoon stadium. He was just over 1 week away from his upcoming IPPT, and desperately needed to smash the 8.30 barrier in order to achieve the maximum score of 100 Pts. He had been trying to reach the elusive mark for multiple attempts at this point, all of which fell agonisingly short. He was easily able to hit the maximum score for the static push up and sit up exercises, being from a combat sports background. However, while he was able to dip under 9 minutes for the 2.4km run; that 8.30 mark just seemed like a Step Too Far… until he met TSA.",
          "As his ORD date neared in less than a month away; the upcoming trial was his last realistic shot at reaching his goal. His NS unit offered some real recognition to servicemen who achieved this rare feat; honoring this Hallowed Group of 100-Pointers by Inscribing their Names onto a Plaque, to be prominently displayed as a measure of greatness to Future Generations passing through.\nSong Quek explained all of this to me during our initial exchange, at a slight loss on what to do.\nRegardless, we decided to Take a Bet on Him.",
        ],
      },
      {
        heading: "An Accelerated One-Week Build",
        paragraphs: [
          "Seeking some advice on pacing, he was just about to run another 2.4km time trial on his own. Instead, after establishing his current baseline, I agreed to take him under my wing.",
          "Adopting an accelerated version of our proprietary in-house Clutch Up program; I quickly established the routine for the crucial Week Ahead. Having to work around his NS commitments was a unique challenge, but not one we are unfamiliar with. What’s more, Song Quek literally had to head to Pulau Tekong the very next day, for a training exercise. I would not have the chance to conduct a specific session with him until 2 days later.",
        ],
      },
      {
        heading: "Improvising on the Fly",
        paragraphs: [
          "Nonetheless, Song Quek diligently followed the advice of his coach, even executing runs on his own in the mornings when he couldn’t be physically present at training himself. A memorable session we conducted at Yio Chu Kang stadium threw an unexpected hurdle during the workout; where lanes 1-3 were blocked off due to another running club having priority access to the facility. On the fly, we improvised the workout, extrapolating the now 430 metres per lap track from lane 4 and adapting the objectives of the workout in order to achieve the desired effect. Conducting an all in one crash course of sorts; we touched on numerous key aspects to achieving his goal time during the training session. Song Quek soaked all of this in thoroughly, and smashed a fantastically executed workout; naturally, he ended the week in Tip Top shape, right on time for his IPPT.",
        ],
        // imageUrl: songTrainingAsset,
        // imageAlt: "Song Quek during interval training",
        // imageCaption: "Pacing and cadence work during the accelerated crash course.",
      },
      {
        heading: "D-Day: One Last Shot at Glory",
        paragraphs: [
          "Then came the D-day, One Last Shot at Glory, a day where Nothing Less than Perfection would suffice. I woke up to a series of jubilant messages from Song Quek, who had not just achieved his feat of a Perfect 100 Points but also Smashed his 2.4km Run Personal Best timing, clocking in at a blistering 8mins 25 seconds, which was comfortably under the target mark of 8.30. What made this achievement even more impressive, was that Song Quek did not even do his run on a typical running track, as one would expect; he had to make do with several laps around an underground carpark, and thus couldn’t rely on typical methods of pace setting. Despite all this, he executed our discussed plan Down to a Tee, and as a result had a Phenomenal Performance on that day.",
        ],
        callout:
          "“The pacing strategy from the get go and the final sprint helped me tremendously in hitting this timing!”",
        imageUrl: songResultAsset,
        imageAlt: "Song Quek's 100 Points IPPT result",
        imageCaption: "A blistering 8:25 2.4km run in an underground carpark to secure 100 points.",
      },
      {
        heading: "The Final Piece of the Puzzle",
        paragraphs: [
          "Song Quek is living proof that with the right mindset and attitude, pre-breakthrough energy is stored, and just waiting to be unlocked. It was merely a matter of time before an athlete like himself would reach his 100 points; but sometimes, what is Missing is that Final Piece in the Puzzle.",
        ],
      },
    ],
    closing:
      "Song Quek brought his A-Game both to Training and when it came to the Crunch, hugely leveling up in terms of his mentality & pacing with TSA. He deserves huge credit for stepping up to the occasion - no less in his final IPPT as an NSF - and walks away with his name Marked in History, inscribed on a plaque indefinitely to serve as a Source of Inspiration to future generations! Well done Song Quek, and all the best in your post-ORD endeavours!",
  },

  // shun yuan's writeup
  "s-y-chu": {
    slug: "s-y-chu",
    name: "Shun Yuan",
    role: "NSman, 23",
    photoUrl: shunYuanAsset.url,
    photoAlt: "Shun Yuan leaning against a stone wall overseas",
    quote:
      "I went from doubting myself to running a sub-10 minute 2.4km with only 3 weeks of proper training. TSA knew exactly how to push me while keeping training realistic and effective. Couldn't have done this without their guidance.",
    stats: [
      { value: "9:54", label: "2.4km timing — Gold standard" },
      { value: "89 / 100", label: "IPPT score" },
      { value: "3.5 weeks", label: "Tailored Clutch Up program" },
      { value: "0", label: "In-person sessions — fully remote" },
    ],
    sections: [
      {
        heading: "The Starting Line",
        paragraphs: [
          "Shun Yuan came to us in early December 2025 as a friend. Knowing our track record and background in speed development, he reached out for guidance to prepare for his upcoming IPPT on January 3, 2026.",
          "Having taken a hiatus from structured training for almost the entire year, he was essentially starting from scratch with less than four weeks to prepare. We immediately enrolled him in a tailored, 3.5-week version of our proprietary Clutch Up program. With time working against us, every single session had to carry a clear, distinct purpose.",
        ],
      },
      {
        heading: "The Remote Build",
        paragraphs: [
          "Rather than relying purely on generic volume, we designed a multi-faceted routine designed to build speed and strength, making his target 2.4km race effort feel far more manageable by training him to comfortably sustain an effort faster than race pace.",
          "We adapted his body to the demands of the trial, and obtained a precise strategy for his race-day execution.",
        ],
      },
      {
        heading: "Coached From Afar",
        paragraphs: [
          "What makes Shun Yuan's breakthrough particularly special is that we never attended a single session in person. Every workout was delivered remotely.",
          "Shun Yuan took complete ownership of the program, trusting the process implicitly and executing every split, rest period, and pacing strategy down to the second.",
        ],
      },
      {
        heading: "Test Day",
        paragraphs: [
          "On January 3, 2026, the disciplined execution paid off in full. Shun Yuan didn't just regain his baseline — he vaulted straight back into his peak Personal Best shape, dropping a blistering 9:54 2.4km and securing an 89-point Gold award.",
        ],
        callout:
          "I just focused on my own game... and zoomed past people like it was nothing. I'm pretty sure 11 mins would've been a struggle had TSA not come in to save me!",
        imageUrl: shunyuanResultAsset,
        imageAlt: "Shun Yuan's 89 point (Gold) IPPT result",
        imageCaption: "From Couch to sub-10 in 3.5 weeks.",
      },
      {
        heading: "Proof the System Travels",
        paragraphs: [
          "Shun Yuan's success is living proof that TSA's coaching system is as effective online as it is trackside. You don't need a coach standing over you with a stopwatch every day — so long as you fully commit to the system and trust the plan, the results will follow.",
        ],
      },
    ],
    closing:
      "Sensational effort, Shun Yuan! We're thrilled to have helped you reclaim your Gold standard!",
  },

  // jared's writeup
  "jared": {
    slug: "jared",
    name: "Jared",
    role: "Post-NS Athlete",
    photoUrl: jaredAsset,
    photoAlt: "jared",

    // resultImage: jaredResultAsset,
    stats: [
      { label: "Focus", value: "Post-NS Rebuild" },
      { label: "Goal", value: "Weight Loss & Fitness" },
      { label: "Method", value: "Aerobic Building Blocks" },
      { label: "Result", value: "Lifestyle Overhaul" },
    ],
    quote: "TSA helped me break out of the post-NS slump with a sustainable routine. I lost weight, built a real aerobic engine, and completely overhauled my lifestyle.",
    sections: [
      {
        heading: "Breaking the Post-NS Slump",
        paragraphs: [
        "When Jared first joined TSA, he was looking to break out of a cycle that affects so many post-NS servicemen: the inevitable physical slump after two years in a largely sedentary role. Having lost the structured activity of full-time service, he was ready to reset his habits, shed weight, and build an athletic, sustainable physique from the ground up."
        ]
      },
      {
        heading: "The Strategy: Low-Impact, Progressive Building Blocks",
        paragraphs: [
        "Rather than throwing him into high-impact, unsustainable beatdowns that risk burnout or injury, we took a structured, long-term approach tailored to his starting point. We designed a manageable weekly routine centered around moderate-to-low intensity training, ensuring he could build cardiovascular fitness without overwhelming his body."
        ]
      },
      {
        heading: "Habit-Stacking & Daily Momentum",
        paragraphs: [
          "The core objective was building consistency and establishing a daily habit of movement. By focusing on sustainable aerobic building blocks, progressive aerobic runs, and steady habit-stacking, Jared quickly transformed training from something he had to force into something that naturally anchored his day."
        ]
      },
      {
        heading: "The Transformation: From Weight Loss to Athletic Physique",
        paragraphs: [
        "As the weeks stacked up, the physical transformation followed naturally. What started as a goal to lose weight evolved into a complete lifestyle overhaul. Jared didn't just shed body fat—he built a strong aerobic engine, refined his running mechanics, and transformed into a capable, confident runner with the athletic physique to back it up.\n\nJared’s journey is proof that big physical breakthroughs don't always require extreme measures—they require the right system, progressive intensity, and unshakeable consistency.\n\nOutstanding work, Jared! We're proud to have been part of your shift toward a healthier, more active life!"
        ]
      }
    ],
    closing: "Outstanding work, Jared! We're proud to have been part of your shift toward a healthier, more active life!"
  }
};
