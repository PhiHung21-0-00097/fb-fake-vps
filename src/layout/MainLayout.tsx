import {
  Sidebar,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Settings } from "lucide-react";
import Image from "next/image";
import { user } from "../../public";

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#ECEFF3]">
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <h2 className="text-lg font-bold capitalize">
              OTIS connects the world
            </h2>
          </SidebarHeader>

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Settings">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="h-16">
                <SidebarMenuButton className="h-full flex">
                  <div className="flex">
                    <div>
                      <Image alt="" className="max-w-16" src={user} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h1 className="font-bold">Otis Nguyễn</h1>
                      <p className="text-gray-600">Otis: Just say hello</p>
                    </div>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="h-16">
                <SidebarMenuButton className="h-full flex">
                  <div className="flex">
                    <div>
                      <Image alt="" className="max-w-16" src={user} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h1 className="font-bold">Otis Nguyễn</h1>
                      <p className="text-gray-600">Otis: Just say hello</p>
                    </div>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarSeparator />

          {/* <SidebarFooter>
            <p className="text-xs text-muted-foreground">© 2025 MyApp</p>
          </SidebarFooter> */}
        </Sidebar>

        <SidebarInset>
          {/* Nội dung chính */}
          <div className="p-6">Main content here</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
export default MainLayout;
