import React from "react";

export default function DashHome({ children }) {
  return <main>{children}</main>;
}

// <div className="w-32 h-6 px-2.5 py-[5px] bg-[linear-gradient(to_right,#281000_0%,#C0971C_30%,#FFE976_50%,#C0971C_70%,#281000_100%)] rounded-[90px] shadow-[0px_0px_20px_2px_rgba(254,214,0,0.20)] outline outline-1 outline-offset-[-1px] outline-yellow-600/50 inline-flex justify-center items-center gap-2.5">
//               <div className="justify-start">
//                 <span class="text-black text-[10px] font-normal font-['Poppins'] leading-relaxed">
//                   Expire :{" "}
//                 </span>
//                 <span class="text-black text-[10px] font-semibold font-['Poppins'] leading-relaxed">
//                   25-12-2025
//                 </span>
//               </div>
//             </div>
