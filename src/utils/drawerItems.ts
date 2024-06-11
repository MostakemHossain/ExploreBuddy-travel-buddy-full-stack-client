import { userRole } from "@/constants/role";
import { DrawerItem, UserRole } from "@/types";
import BackpackIcon from "@mui/icons-material/Backpack";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KeyIcon from "@mui/icons-material/Key";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];
  const defaultMenus = [
    {
      title: "profile",
      path: `${role}/profile`,
      icon: PersonIcon,
    },
    {
      title: "change Password",
      path: `change-password`,
      icon: KeyIcon,
    },
  ];
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

  return [...roleMenus, ...defaultMenus];
};
