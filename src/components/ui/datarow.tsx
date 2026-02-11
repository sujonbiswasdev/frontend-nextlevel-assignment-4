import { ChevronRight, LucideIcon } from "lucide-react";
interface DataRowProps {
  label: string;
  value?: string;
  icon?: LucideIcon;
  isAction?: boolean;  
  border?: boolean;  
  onClick?: () => void;
}

const DataRow = ({ label, value, icon: Icon, isAction, border = true }:DataRowProps) => (
  <div className={`flex items-center justify-between py-4 ${border ? 'border-b border-gray-100' : ''} cursor-pointer group`}>
    <div className="flex items-center gap-3">
      {Icon && <Icon size={18} className="text-gray-500 group-hover:text-blue-500" />}
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-400">{value}</span>
      {isAction && <ChevronRight size={16} className="text-gray-300" />}
    </div>
  </div>
);