import { AppSidebar } from "@/components/dashboard/sidebar/app-sidebar";
import DashboardHeader from "@/components/dashboard/serchandmenuicon";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Roles } from "@/contrains/roles";
import { getSession } from "@/services/user.service";

export default async function DashboardLayout({
  Admin,
  Provider,
}: {
  children: React.ReactNode;
  Admin: React.ReactNode;
  Provider: React.ReactNode;
}) {

  const { data } = await getSession();
  

  const userInfo =data

  return (
    <SidebarProvider className="mx-auto">
      <AppSidebar user={userInfo} />
      <SidebarInset>
           <DashboardHeader/>
          <SidebarTrigger className="-ml-1" />
        <div className="w-full max-w-7xl mx-auto px-4 ">
          {userInfo.result.role === Roles.admin ? Admin : Provider}
          
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}