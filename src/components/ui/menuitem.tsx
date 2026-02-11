import { ChevronRight } from "lucide-react";

function MenuItem({
icon: Icon,
label,
right,
}: {
icon: any;
label: string;
right?: React.ReactNode;
}) {
return (
<div className="flex cursor-pointer items-center justify-between px-5 py-4 hover:bg-gray-50">
<div className="flex items-center gap-3 text-sm">
<Icon size={18} />
{label}
</div>
{right ?? <ChevronRight size={16} />}
</div>
);
}

export default MenuItem