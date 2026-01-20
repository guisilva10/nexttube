import { SidebarInset, SidebarProvider } from "@/app/_components/ui/sidebar";
import { PropsWithChildren } from "react";
import { SiteHeader } from "./_components/site-header";
import { AppSidebar } from "./_components/app-sidebar";
import { auth } from "@/services/auth";

export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth();
  return (
    <div className="[--header-height:calc(--spacing(10))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar user={session?.user} />
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
