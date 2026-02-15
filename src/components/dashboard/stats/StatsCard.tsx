import { FileText, ArrowUp } from "lucide-react";
type statsCardType={
    title:string,
    amount?:number,
    icon?:string
}

export default function StatsCard({title,amount,icon}:statsCardType) {
  return (
    <div className="flex-1 min-w-[200px] flex items-center gap-4 p-6 border border-gray-200 rounded-2xl shadow-sm bg-white">
    <div className="text-blue-500 text-3xl">{icon}</div>
    <div>
      <p className="text-gray-500 capitalize">{title}</p>
      <p className="text-gray-400">{amount}</p>
    </div>
  </div>
  );
}