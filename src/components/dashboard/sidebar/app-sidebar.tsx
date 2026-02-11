"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Route } from "@/types"
import { Roles } from "@/contrains/roles"
import { adminRoutes } from "@/routes/adminRoutes"
import { ProviderRoutes } from "@/routes/providerRoter"
import DashboardNavmenu from "./nav-main"
type User = {
  result: { role: string }
}
export function AppSidebar({ user, ...props }: { user: User & React.ComponentProps<typeof Sidebar> }) {

  let routes: Route[] = []
  switch (user.result.role) {
    case Roles.admin:
      routes = adminRoutes;
      break;
    case Roles.provider:
      routes = ProviderRoutes;
      break;
    default:
      routes = [];
      break;
  }
  return (
    <Sidebar  collapsible="offcanvas" {...props}>
     
    </Sidebar>
  )
}
