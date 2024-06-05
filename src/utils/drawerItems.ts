import { userRole } from "@/constants/role";
import { DrawerItem, UserRole } from "@/types";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BackpackIcon from '@mui/icons-material/Backpack';

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
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus];
};
