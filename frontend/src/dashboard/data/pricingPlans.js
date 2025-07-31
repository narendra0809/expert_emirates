import { MdDiscount } from "react-icons/md";

// data/pricingPlans.js
export const pricingPlans = {
  forex: [
    {
      title: "Standard Plan",
      price: "$199",
      billing: "/MONTHLY",
      description: "Perfect for small teams or unlimited evaluation.",
      features: [
        "📊 Premium Trade Signals (12–15/Week)",
        "⚖️ Risk Reward Ratio - 1:2 , 1:3, 1:4",
        "📲 Instant Telegram Trade Alerts",
        "📰 Exclusive Weekly Market Blueprint",
        "🛡 Smart Risk Management Tips",
        "🤝 Dedicated VIP Support",
        "🚀 Forex + Gold Elite Access",
        "⚙ First to New Features & Tools",
      ],
    },
    {
      title: "Pro Plan",

      price: "$499",
      billing: "/QUARTERLY",
      description:
        "Everything in Standard, plus enhanced features for serious traders.",
      features: [
        "📊 Premium Trade Signals (12–15/Week)",
        "⚖️ Risk Reward Ratio - 1:2 , 1:3, 1:4",
        "📲 Instant Telegram Trade Alerts",
        "📰 Exclusive Weekly Market Blueprint",
        "🛡 Smart Risk Management Tips",
        "🤝 Dedicated VIP Support",
        "🚀 Forex + Gold Elite Access",
        "⚙ First to New Features & Tools",
      ],
    },
    {
      title: "Ultra Plan",
      price: "$999",
      billing: "/HALF-YEARLY",
      description:
        "Our premium package for ultimate trading performance. Includes everything in Pro.",
      features: [
        "📊 Premium Trade Signals (12–15/Week)",
        "⚖️ Risk Reward Ratio - 1:2 , 1:3, 1:4",
        "📲 Instant Telegram Trade Alerts",
        "📰 Exclusive Weekly Market Blueprint",
        "🛡 Smart Risk Management Tips",
        "🤝 Dedicated VIP Support",
        "🚀 Forex + Gold Elite Access",
        "⚙ First to New Features & Tools",
      ],
    },
  ],
  gold: [
    {
      title: "Standard Plan",
      price: "$199",
      billing: "/MONTHLY",
      description: "Perfect for small teams or unlimited evaluation.",
      features: [
        "Premium Trade Signals (12–15/Week)",
        "Risk Reward Ratio – 1:2, 1:3, 1:4",
        "Instant Telegram Trade Alerts",
        "Exclusive Weekly Market Blueprint",
        "Smart Risk Management Tips",
        "Dedicated VIP Support",
        "Forex + Gold Elite Access",
        "First to New Features & Tools",
      ],
    },
    {
      title: "Pro Plan",

      price: "$499",
      billing: "/QUARTERLY",
      description:
        "Everything in Standard, plus enhanced features for serious traders.",
      features: [
        "Premium Trade Signals (12–15/Week)",
        "Risk Reward Ratio – 1:2, 1:3, 1:4",
        "Instant Telegram Trade Alerts",
        "Exclusive Weekly Market Blueprint",
        "Smart Risk Management Tips",
        "Dedicated VIP Support",
        "Forex + Gold Elite Access",
        "First to New Features & Tools",
      ],
    },
    {
      title: "Ultra Plan",
      price: "$999",
      billing: "/HALF-YEARLY",
      description:
        "Our premium package for ultimate trading performance. Includes everything in Pro.",
      features: [
        "Premium Trade Signals (12–15/Week)",
        "Risk Reward Ratio – 1:2, 1:3, 1:4",
        "Instant Telegram Trade Alerts",
        "Exclusive Weekly Market Blueprint",
        "Smart Risk Management Tips",
        "Dedicated VIP Support",
        "Forex + Gold Elite Access",
        "First to New Features & Tools",
      ],
    },
  ],
  crypto: [
    {
      title: "Standard Plan",
      price: "$199",
      billing: "/MONTHLY",
      description: "Perfect for small teams or unlimited evaluation.",
      features: [
        "Premium Trade Signals (12–15/Week)",
        "Risk Reward Ratio – 1:2, 1:3, 1:4",
        "Instant Telegram Trade Alerts",
        "Exclusive Weekly Market Blueprint",
        "Smart Risk Management Tips",
        "Dedicated VIP Support",
        "Forex + Gold Elite Access",
        "First to New Features & Tools",
      ],
    },
    {
      title: "Pro Plan",

      price: "$499",
      billing: "/QUARTERLY",
      description:
        "Everything in Standard, plus enhanced features for serious traders.",
      features: [
        "Premium Trade Signals (12–15/Week)",
        "Risk Reward Ratio – 1:2, 1:3, 1:4",
        "Instant Telegram Trade Alerts",
        "Exclusive Weekly Market Blueprint",
        "Smart Risk Management Tips",
        "Dedicated VIP Support",
        "Forex + Gold Elite Access",
        "First to New Features & Tools",
      ],
    },
  ],
  portfolio: [
    {
      title: "Standard Plan",
      price: "$199",
      billing: "/MONTHLY",
      description: "Perfect for small teams or unlimited evaluation.",
      features: [
        "Premium Trade Signals (12–15/Week)",
        "Risk Reward Ratio – 1:2, 1:3, 1:4",
        "Instant Telegram Trade Alerts",
        "Exclusive Weekly Market Blueprint",
        "Smart Risk Management Tips",
        "Dedicated VIP Support",
        "Forex + Gold Elite Access",
        "First to New Features & Tools",
      ],
    },

    {
      title: "Ultra Plan",
      price: "$999",
      billing: "/HALF-YEARLY",
      description:
        "Our premium package for ultimate trading performance. Includes everything in Pro.",
      features: [
        "Premium Trade Signals (12–15/Week)",
        "Risk Reward Ratio – 1:2, 1:3, 1:4",
        "Instant Telegram Trade Alerts",
        "Exclusive Weekly Market Blueprint",
        "Smart Risk Management Tips",
        "Dedicated VIP Support",
        "Forex + Gold Elite Access",
        "First to New Features & Tools",
      ],
    },
  ],
};

const convertedPlans = {
  Forex: [],
  Gold: [],
  "Crypto Currency": [],
  "Portfolio Managment": [],
};

const plans = [
  {
    id: 8,
    category: "Forex",
    type: "Standard Plan",
    description: "Perfect for small teams or unlimited evaluation.",
    price: 199,
    duration: "Monthly",
    features:
      '[" 📊 Premium Trade Signals (12–15/Week)","⚖️ Risk Reward Ratio - 1:2 , 1:3, 1:4","📲 Instant Telegram Trade Alerts","📰 Exclusive Weekly Market Blueprint","🛡 Smart Risk Management Tips","🤝 Dedicated VIP Support","🚀 Forex + Gold Elite Access","⚙ First to New Features & Tools"]',
    created_at: "2025-07-31T12:48:17.000000Z",
    updated_at: "2025-07-31T12:48:17.000000Z",
  },
  {
    id: 9,
    category: "Forex",
    type: "Pro Plan",
    description:
      "Everything in Standard, plus enhanced features for serious traders.",
    price: 499,
    duration: "Quartarly",
    features:
      '[" 📊 Premium Trade Signals (12–15/Week)","⚖️ Risk Reward Ratio - 1:2 , 1:3, 1:4","📲 Instant Telegram Trade Alerts","📰 Exclusive Weekly Market Blueprint","🛡 Smart Risk Management Tips","🤝 Dedicated VIP Support","🚀 Forex + Gold Elite Access","⚙ First to New Features & Tools"]',
    created_at: "2025-07-31T12:48:59.000000Z",
    updated_at: "2025-07-31T12:48:59.000000Z",
  },
  {
    id: 10,
    category: "Forex",
    type: "Ultra Plan",
    description:
      "Our premium package for ultimate trading performance. Includes everything in Pro.",
    price: 999,
    duration: "Half Yearly",
    features:
      '[" 📊 Premium Trade Signals (12–15/Week)","⚖️ Risk Reward Ratio - 1:2 , 1:3, 1:4","📲 Instant Telegram Trade Alerts","📰 Exclusive Weekly Market Blueprint","🛡 Smart Risk Management Tips","🤝 Dedicated VIP Support","🚀 Forex + Gold Elite Access","⚙ First to New Features & Tools"]',
    created_at: "2025-07-31T12:49:23.000000Z",
    updated_at: "2025-07-31T12:49:23.000000Z",
  },
  {
    id: 11,
    category: "Gold",
    type: "Standard Plan",
    description:
      "Our premium package for ultimate trading performance. Includes everything in Pro.",
    price: 199,
    duration: "Monthly",
    features:
      '[" 📊 Premium Trade Signals (12–15/Week)","⚖️ Risk Reward Ratio - 1:2 , 1:3, 1:4","📲 Instant Telegram Trade Alerts","📰 Exclusive Weekly Market Blueprint","🛡 Smart Risk Management Tips","🤝 Dedicated VIP Support","🚀 Forex + Gold Elite Access","⚙ First to New Features & Tools"]',
    created_at: "2025-07-31T12:49:44.000000Z",
    updated_at: "2025-07-31T12:49:44.000000Z",
  },
  {
    id: 12,
    category: "Gold",
    type: "Pro Plan",
    description:
      "Our premium package for ultimate trading performance. Includes everything in Pro.",
    price: 499,
    duration: "Quartarly",
    features:
      '[" 📊 Premium Trade Signals (12–15/Week)","⚖️ Risk Reward Ratio - 1:2 , 1:3, 1:4","📲 Instant Telegram Trade Alerts","📰 Exclusive Weekly Market Blueprint","🛡 Smart Risk Management Tips","🤝 Dedicated VIP Support","🚀 Forex + Gold Elite Access","⚙ First to New Features & Tools"]',
    created_at: "2025-07-31T12:49:56.000000Z",
    updated_at: "2025-07-31T12:49:56.000000Z",
  },
  {
    id: 13,
    category: "Gold",
    type: "Ultra Plan",
    description:
      "Our premium package for ultimate trading performance. Includes everything in Pro.",
    price: 999,
    duration: "Half Yearly",
    features:
      '[" 📊 Premium Trade Signals (12–15/Week)","⚖️ Risk Reward Ratio - 1:2 , 1:3, 1:4","📲 Instant Telegram Trade Alerts","📰 Exclusive Weekly Market Blueprint","🛡 Smart Risk Management Tips","🤝 Dedicated VIP Support","🚀 Forex + Gold Elite Access","⚙ First to New Features & Tools"]',
    created_at: "2025-07-31T12:50:05.000000Z",
    updated_at: "2025-07-31T12:50:05.000000Z",
  },
  {
    id: 14,
    category: "Crypto Currency",
    type: "Standard Plan",
    description:
      "Our premium package for ultimate trading performance. Includes everything in Pro.",
    price: 199,
    duration: "Monthly",
    features:
      '[" 📊 Premium Trade Signals (12–15/Week)","⚖️ Risk Reward Ratio - 1:2 , 1:3, 1:4","📲 Instant Telegram Trade Alerts","📰 Exclusive Weekly Market Blueprint","🛡 Smart Risk Management Tips","🤝 Dedicated VIP Support","🚀 Forex + Gold Elite Access","⚙ First to New Features & Tools"]',
    created_at: "2025-07-31T12:50:21.000000Z",
    updated_at: "2025-07-31T12:50:21.000000Z",
  },
  {
    id: 15,
    category: "Crypto Currency",
    type: "Pro Plan",
    description:
      "Our premium package for ultimate trading performance. Includes everything in Pro.",
    price: 499,
    duration: "Quartarly",
    features:
      '[" 📊 Premium Trade Signals (12–15/Week)","⚖️ Risk Reward Ratio - 1:2 , 1:3, 1:4","📲 Instant Telegram Trade Alerts","📰 Exclusive Weekly Market Blueprint","🛡 Smart Risk Management Tips","🤝 Dedicated VIP Support","🚀 Forex + Gold Elite Access","⚙ First to New Features & Tools"]',
    created_at: "2025-07-31T12:50:38.000000Z",
    updated_at: "2025-07-31T12:50:38.000000Z",
  },
  {
    id: 16,
    category: "Crypto Currency",
    type: "Ultra Plan",
    description:
      "Our premium package for ultimate trading performance. Includes everything in Pro.",
    price: 999,
    duration: "Half Yearly",
    features:
      '[" 📊 Premium Trade Signals (12–15/Week)","⚖️ Risk Reward Ratio - 1:2 , 1:3, 1:4","📲 Instant Telegram Trade Alerts","📰 Exclusive Weekly Market Blueprint","🛡 Smart Risk Management Tips","🤝 Dedicated VIP Support","🚀 Forex + Gold Elite Access","⚙ First to New Features & Tools"]',
    created_at: "2025-07-31T12:50:51.000000Z",
    updated_at: "2025-07-31T12:50:51.000000Z",
  },
  {
    id: 17,
    category: "Portfolio Managment",
    type: "Standard Plan",
    description:
      "Our premium package for ultimate trading performance. Includes everything in Pro.",
    price: 199,
    duration: "Monthly",
    features:
      '[" 📊 Premium Trade Signals (12–15/Week)","⚖️ Risk Reward Ratio - 1:2 , 1:3, 1:4","📲 Instant Telegram Trade Alerts","📰 Exclusive Weekly Market Blueprint","🛡 Smart Risk Management Tips","🤝 Dedicated VIP Support","🚀 Forex + Gold Elite Access","⚙ First to New Features & Tools"]',
    created_at: "2025-07-31T12:51:01.000000Z",
    updated_at: "2025-07-31T12:51:01.000000Z",
  },
  {
    id: 18,
    category: "Portfolio Managment",
    type: "Pro Plan",
    description:
      "Our premium package for ultimate trading performance. Includes everything in Pro.",
    price: 499,
    duration: "Quartarly",
    features:
      '[" 📊 Premium Trade Signals (12–15/Week)","⚖️ Risk Reward Ratio - 1:2 , 1:3, 1:4","📲 Instant Telegram Trade Alerts","📰 Exclusive Weekly Market Blueprint","🛡 Smart Risk Management Tips","🤝 Dedicated VIP Support","🚀 Forex + Gold Elite Access","⚙ First to New Features & Tools"]',
    created_at: "2025-07-31T12:51:14.000000Z",
    updated_at: "2025-07-31T12:51:14.000000Z",
  },
  {
    id: 19,
    category: "Portfolio Managment",
    type: "Ultra Plan",
    description:
      "Our premium package for ultimate trading performance. Includes everything in Pro.",
    price: 999,
    duration: "Half Yearly",
    features:
      '[" 📊 Premium Trade Signals (12–15/Week)","⚖️ Risk Reward Ratio - 1:2 , 1:3, 1:4","📲 Instant Telegram Trade Alerts","📰 Exclusive Weekly Market Blueprint","🛡 Smart Risk Management Tips","🤝 Dedicated VIP Support","🚀 Forex + Gold Elite Access","⚙ First to New Features & Tools"]',
    created_at: "2025-07-31T12:51:31.000000Z",
    updated_at: "2025-07-31T12:51:31.000000Z",
  },
];

plans.forEach((plan) => {
  convertedPlans[plan.category].push(plan);
});

console.log("Converted Plans : ", convertedPlans);
