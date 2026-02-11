"use client";

import { useState } from "react";
import { ChevronDown, UtensilsCrossed, LayoutGrid } from "lucide-react";
import clsx from "clsx";
import { Route } from "@/types"
import { Roles } from "@/contrains/roles";
import { adminRoutes } from "@/routes/adminRoutes";
import { ProviderRoutes } from "@/routes/providerRoter";
import Link from "next/link";

interface MenuItem {
  label: string;
  href: string;
}

interface MenuSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

export default function Sidebar({navitem}:{navitem:Route[]}) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const handleToggle = (id: string) => {
    setOpenMenu((prev) => (prev === id ? null : id));
  };

  return (
    <div className="overflow-hidden">
      {/* Mobile Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white-900 text-black p-2 rounded-md shadow-md"
      >
        {sidebarOpen?"o":"x"}
      </button>

      <aside
        className={clsx(
          "fixed lg:static top-0 left-0 h-screen w-70 bg-gradient-to-b from-white-900 to-white/50 text-white shadow-xl transition-transform duration-300 z-40",
          sidebarOpen ? "translate-x-0 " : "-translate-x-full lg:translate-x-0 "
        )}
      >
        <div className="p-2">
          <h2 className="text-xl font-semibold tracking-wide text-black">
            Dashboard
          </h2>
        </div>

        <nav className="px-4 space-y-2">
          {navitem.map((item,index) => {
            const isOpen = openMenu === item.id;

            return (
              <div key={item.id}>
                <button
                  onClick={() => handleToggle(item.id)}
                  className="w-full flex items-center justify-between px-4 rounded-lg text-black transition-colors duration-200"
                >
                  <div className="flex items-center gap-1">
                    {item.icon}
                    <Link href={item.url || "/admin-dashboard"} className="font-medium text-gray-900">{item.title}</Link>
                  </div>

                  <ChevronDown
                    size={18}
                    className={clsx(
                      "transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                <div
                  className={clsx(
                    "overflow-hidden transition-all duration-300",
                    isOpen ? "max-h-60" : "max-h-0"
                  )}
                >
                  <ul className="space-y-1 pl-6 text-sm text-gray-300">
                    {item?.items?.map((item,index:number) => (
                      <li key={item.title}>
                        <Link
                          href={item.url}
                          className="block py-2 px-3 rounded-md transition-colors text-gray-900"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}
