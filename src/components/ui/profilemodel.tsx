import { getSession } from "@/services/user.service";
import { Camera, X } from "lucide-react";
import Image from "next/image";
import InfoRow from "./inforow";
import { User } from "@/types";


async function ProfileModal({ user }: { user: User }) {
    const {data}=await getSession()
return (
<div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl mx-auto">
{/* Header */}
<div className="flex items-center justify-between border-b p-6">
<div className="flex items-center gap-4">
<div className="relative">
<button className="absolute -bottom-1 -right-1 rounded-full bg-blue-600 p-1.5 text-white shadow">
<Camera size={14} />
</button>
</div>
<div>
<h2 className="text-lg font-semibold">{data?.result?.result?.name}</h2>
<p className="text-sm text-gray-500">{data?.result?.result?.email}</p>
</div>
</div>
<X className="cursor-pointer text-gray-400 hover:text-gray-600" />
</div>


{/* Details */}
<div className="divide-y">
<InfoRow label="Full Name" value={data?.result?.result?.name} />
<InfoRow label="Email Address" value={data?.result?.result?.email} />
<InfoRow label="Phone Number" value={data?.result?.result?.phone ?? "Add number"} />
<InfoRow label="Location" value={user?.location ?? "Not set"} />
<InfoRow label="Role" value={data?.result?.result?.role ?? "Customer"} />
<InfoRow label="Language" value={user?.language ?? "English"} />
</div>


{/* Footer */}
<div className="flex justify-end p-6">
<button className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700 active:scale-95">
Save Changes
</button>
</div>
</div>
);
}

export default ProfileModal