"use client";

import { X, Camera } from "lucide-react";
import Image from "next/image";

const Profile=()=> {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Image
                src="https://i.pravatar.cc/100"
                alt="profile"
                width={64}
                height={64}
                className="rounded-full"
              />
              <button className="absolute -bottom-1 -right-1 rounded-full bg-blue-600 p-1.5 text-white shadow">
                <Camera size={14} />
              </button>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Your name</h2>
              <p className="text-sm text-gray-500">yourname@gmail.com</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <X />
          </button>
        </div>

        {/* Body */}
        <div className="divide-y">
          {[
            { label: "Name", value: "your name" },
            { label: "Email account", value: "yourname@gmail.com" },
            { label: "Mobile number", value: "Add number" },
            { label: "Location", value: "USA" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between px-6 py-4"
            >
              <span className="text-sm font-medium text-gray-600">
                {item.label}
              </span>
              <span className="text-sm text-gray-900">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-end p-5">
          <button className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700 active:scale-95">
            Save Change
          </button>
        </div>
      </div>
    </div>
  );
}
export default Profile