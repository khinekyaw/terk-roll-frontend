import { useTranslations } from "next-intl"
import { 
  HiOutlineHome,
  HiHome,
  HiOutlineGlobeAlt,
  HiGlobeAlt,
  HiOutlineUser,
  HiUser,
  HiEllipsisHorizontal
} from "react-icons/hi2"
import { SidebarNavLink } from "./sidebar-nav-link"

const NavLinkList = () => {
  const t = useTranslations("Navigation")

  return (
    <nav className="space-y-[0.875rem]">
      <SidebarNavLink
        icon={HiOutlineHome}
        activeIcon={HiHome}
        title={t("forYou")}
        href="/"
      />
      <SidebarNavLink
        icon={HiOutlineGlobeAlt}
        activeIcon={HiGlobeAlt}
        title={t("explore")}
        href="/explore"
      />
      <SidebarNavLink
        icon={HiOutlineUser}
        activeIcon={HiUser}
        title={t("profile")}
        href="/profile"
      />
      <SidebarNavLink
        icon={HiEllipsisHorizontal}
        activeIcon={HiEllipsisHorizontal}
        title={t("more")}
        href=""
      />
    </nav>
  )
}

export default NavLinkList