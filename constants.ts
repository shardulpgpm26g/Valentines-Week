import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Which version of me is your favorite to be around?",
    summaryKey: "Favorite me",
    options: [
      {
        id: 'goofy',
        label: 'Goofy mode',
        letterFragment: "So you love my goofy side — the one that does silly things just to see you smile."
      },
      {
        id: 'deep',
        label: 'Deep talks',
        letterFragment: "You love our deep talks — the moments where we forget time and just exist together."
      },
      {
        id: 'flirty',
        label: 'Flirty vibe',
        letterFragment: "You enjoy my flirty side — the way I can’t help but tease you because I adore you."
      },
      {
        id: 'quiet',
        label: 'Quiet soft',
        letterFragment: "You love the quiet soft me — the calm moments where we don’t need words."
      }
    ]
  },
  {
    id: 2,
    text: "If you had to brag about me to someone, what would you say first?",
    summaryKey: "You’d brag I’m",
    options: [
      {
        id: 'loyal',
        label: 'He’s loyal',
        letterFragment: "You’d tell people I’m loyal — and loving you makes commitment feel effortless."
      },
      {
        id: 'funny',
        label: 'He’s funny',
        letterFragment: "You’d brag that I’m funny — and honestly, your laugh is my favorite sound."
      },
      {
        id: 'driven',
        label: 'He’s driven',
        letterFragment: "You see my driven side — and having you beside me pushes me to be better."
      },
      {
        id: 'kind',
        label: 'He’s kind',
        letterFragment: "You’d say I’m kind — and loving you brings that out of me every day."
      }
    ]
  },
  {
    id: 3,
    text: "What was your first clue that I liked you?",
    summaryKey: "You noticed",
    options: [
      {
        id: 'nervous',
        label: 'Nervous laughs',
        letterFragment: "You noticed my nervous laughs first — because I already cared more than I showed."
      },
      {
        id: 'texts',
        label: 'Long texts',
        letterFragment: "You caught on through my long texts — every message carrying a little piece of me."
      },
      {
        id: 'excuses',
        label: 'Finding excuses',
        letterFragment: "You noticed me finding excuses — just to spend more time with you."
      },
      {
        id: 'effort',
        label: 'Extra effort',
        letterFragment: "You saw my extra effort first — because you mattered to me long before you knew it."
      }
    ]
  },
  {
    id: 4,
    text: "When do you feel closest to me?",
    summaryKey: "Closest moments",
    options: [
      {
        id: 'late',
        label: 'Late night talks',
        letterFragment: "You feel closest during late night talks — and those quiet hours with you are some of my favorite moments."
      },
      {
        id: 'hugs',
        label: 'Random hugs',
        letterFragment: "You feel closest in random hugs — and honestly, holding you feels like home."
      },
      {
        id: 'laughs',
        label: 'Laughing together',
        letterFragment: "You feel closest when we laugh together — and I love how easy joy feels with you."
      },
      {
        id: 'silence',
        label: 'Comfortable silence',
        letterFragment: "You feel closest in comfortable silence — where just being together is enough."
      }
    ]
  },
  {
    id: 5,
    text: "What do I do that makes you feel most loved?",
    summaryKey: "You feel loved when",
    options: [
      {
        id: 'listen',
        label: 'I listen',
        letterFragment: "Knowing you feel loved when I listen reminds me how important it is to always hear your heart."
      },
      {
        id: 'show',
        label: 'I show up',
        letterFragment: "Knowing you feel loved when I show up — I promise I always will."
      },
      {
        id: 'reassure',
        label: 'I reassure you',
        letterFragment: "Knowing reassurance matters to you makes me want to protect your heart even more."
      },
      {
        id: 'laugh',
        label: 'I make you laugh',
        letterFragment: "Knowing I make you laugh reminds me how beautiful it is to share happiness with you."
      }
    ]
  }
];
