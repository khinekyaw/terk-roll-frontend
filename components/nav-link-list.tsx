import { useTranslations } from "next-intl"
import {
  HiOutlineHome,
  HiHome,
  HiOutlineGlobeAlt,
  HiGlobeAlt,
  HiOutlineUser,
  HiUser,
  HiEllipsisHorizontal,
} from "react-icons/hi2"
import { SidebarNavLink } from "./sidebar-nav-link"
import { SidebarNavButton } from "@/components/sidebar-nav-button"

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
      <SidebarNavButton
        id="sidebar-more"
        title={t("more")}
        icon={HiEllipsisHorizontal}
        activeIcon={HiEllipsisHorizontal}
        className="w-full"
      />
    </nav>
  )
}

export default NavLinkList
