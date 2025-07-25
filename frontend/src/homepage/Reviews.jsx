import React from "react";
import VerifyIcon from "../assets/review/Verify.png"; // Make sure this path is correct

const reviews = [
  {
    name: "Abdirisak faysal",
    time: "1 hour ago",
    content:
      "I joined EXPERT EMIRATES VIP after checking out their free group for a bit. They were super transparent with their results and posted real-time signals, so I felt confident upgrading. Big respect to the team! I also started their account management service in March after my account crossed $7,000. Since then, my growth has been steady and low-risk. Definitely a big step up from random signal groups! 📈",
  },
  {
    name: "Joe T.",
    time: "1 hour ago",
    content:
      "I'm only using their account management service now and it’s been smooth sailing. I had about $2,500 and didn’t want the stress of trading by myself anymore. Since EXPERT EMIRATES took over, my account has been growing consistently, not crazy gambling like other places — real professionals handling my trades. I can finally relax! 😌",
  },
  {
    name: "Ali Abolhosseini",
    time: "1 hour ago",
    content:
      "For anyone new to trading, EXPERT EMIRATES is a great place to start. I first tried their free signals, then moved to VIP, and after a couple of weeks, joined the account management service too. I like that they don’t push you to buy anything — it’s all at your own pace. Loving the experience so far.✨",
  },
  {
    name: "Marvin McKinney",
    time: "1 hour ago",
    content:
      "Their signals are really good, but you definitely need to follow their risk management method. In the beginning, I was risking too much and it didn’t go well. But after a chat with Adeeb from their team (thank you!), he explained how to size my lots properly. Since then, my trading results have improved a lot. Great support and very helpful!",
  },
  {
    name: "Aqib Siddiquee",
    time: "4 hours ago",
    content:
      "Their forex signals — especially GOLD — are absolutely on fire! 🔥 I’ve been following them for about a month and already had around 13 winning trades and only 3 losses. I started with a small amount and now my account is slowly but surely growing. Good energy all around!✌️",
  },
  {
    name: "Gaele Lepron",
    time: "2 hours ago",
    content:
      "I joined EXPERT EMIRATES VIP two months ago and the signals have been accurate overall. There have been some losses, but that’s part of the game. What I really like is that they’re very open and honest in their reporting — good and bad. Only reason for 4 stars is I’d like a few more educational posts.",
  },
  {
    name: "Tariq Boudjella",
    time: "3 hour ago",
    content:
      "I’ve tried a bunch of other signal services before (not going to name them lol), but EXPERT EMIRATES has been the most reliable. They actually teach proper strategy if you ask, and I noticed their accuracy after a few weeks, and it really helped me understand setups and avoid overtrading. Still figuring my entries, but now I trade with more confidence!",
  },
  {
    name: "Ronald Richards",
    time: "2 hours ago",
    content:
      "Really professional service and strong forex signals. Most traders work out well if you stick to their risk management. I just wish they posted more crypto trades too — that would make it even better!",
  },
  {
    name: "Mustafa Muzamil",
    time: "5 hours ago",
    content:
      "EXPERT EMIRATES signals are very reliable. I’ve had my wins and losses but it always comes back to growing nicely. I’m giving 4 stars only because sometimes the signals come when it’s late for me. Otherwise, no complaints!",
  },
  {
    name: "Mohamud Muktar",
    time: "7 hours ago",
    content:
      "I’ve been using EXPERT EMIRATES signals for about 6 weeks. So far, it’s been way better than other groups I tried. My only complaint is that during big news events, I wish they gave earlier warnings. But otherwise, very professional!👍",
  },
  {
    name: "Eleanor Pena",
    time: "7 hours ago",
    content:
      "Great service with real results. I started with $300 and after a month I’m up by about 15%. Their support team responds quickly and the signal explanations are clear. Only reason for 4 stars is that the VIP chat can get a bit quiet on weekends, but during the week it’s super active!",
  },
];

const StarRating = () => (
  <div className="flex items-center mb-2">
    {"★★★★★".split("").map((_, i) => (
      <span key={i} className="text-yellow-400 text-sm">★</span>
    ))}
    <span className="ml-2 flex items-center text-sm text-gray-400">
      <img src={VerifyIcon} alt="Verified" className="w-4 h-4 mr-1" />
      Verified
    </span>
  </div>
);

const ReviewCard = ({ review }) => (
  <div className="bg-[#1C1B2A] text-white p-4 rounded-xl shadow hover:shadow-xl transition-all duration-300max-h-[80vh] overflow-y-auto scrollbar-hidden">
    <StarRating />
    <h2 className="text-sm font-semibold">
      {review.name},{" "}
      <span className="text-gray-400 font-normal">{review.time}</span>
    </h2>
    <p className="mt-2 text-sm text-gray-300">{review.content}</p>
  </div>
);

export default function ReviewSection() {
  return (
    <div className="min-h-screen bg-black py-10 px-4">
      {/* Scrollable area with scrollbar hidden */}
      <div className="max-h-[80vh] overflow-y-auto scrollbar-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
