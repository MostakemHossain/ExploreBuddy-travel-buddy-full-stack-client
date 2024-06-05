import { userRole } from "@/constants/role";
import { DrawerItem, UserRole } from "@/types";
import BackpackIcon from "@mui/icons-material/Backpack";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import CardTravelIcon from "@mui/icons-material/CardTravel";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];
  switch (role) {
    case userRole.ADMIN:
      roleMenus.push(
        {
          title: "DashBoard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: PeopleIcon,
        }
      );
      break;
    case userRole.SUPER_ADMIN:
    case userRole.USER:
      roleMenus.push(
        {
          title: "DashBoard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Create Trip",
          path: `${role}/create-trip`,
          icon: BackpackIcon,
        },
        {
          title: "My-trip",
          path: `${role}/my-trips`,
          icon: CardTravelIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus];
};
