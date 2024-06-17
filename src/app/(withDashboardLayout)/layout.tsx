"use client";
import DashBoardDrawer from "@/components/Dashboard/DashboardDrawer/DashBoardDrawer";
import { isLoggedIn } from "@/services/auth.services";
// import { useRouter } from "next/navigation";
import React from "react";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  // const router = useRouter();
  if (!isLoggedIn()) {
    // return router.push("/login");
  }
  return <DashBoardDrawer>{children}</DashBoardDrawer>;
};

export default DashBoardLayout;
