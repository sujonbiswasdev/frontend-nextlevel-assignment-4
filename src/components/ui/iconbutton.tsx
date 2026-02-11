interface IconButtonProps {
  icon: string | React.ReactNode; 
  count: number;             
  bgColor: string;          
  textColor: string;             
}
export const IconButton = ({ icon, count, bgColor, textColor }:IconButtonProps) => (
  <div className={`relative p-2.5 ${bgColor} rounded-xl cursor-pointer hover:opacity-80 transition-all`}>
    <span className="text-xl">{icon}</span>
    <span className={`absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-[10px] font-bold text-white border-2 border-white`}>
      {count}
    </span>
  </div>
);