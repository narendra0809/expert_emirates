import React from "react";

export default function TradingViewWidget({ isForex }) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_xauusd&symbol=${
            isForex ? "OANDA:XAUUSD" : "CRYPTO:BTCUSD"
          }&interval=30M&hidesidetoolbar=1&theme=dark`}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            minHeight: 350,
            background: "black",
          }}
          allowTransparency="true"
          scrolling="no"
          title="TradingView Chart"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
