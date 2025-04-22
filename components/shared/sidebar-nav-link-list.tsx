import { useTranslations } from "next-intl"
import {
  HiGlobeAlt,
  HiHome,
  HiOutlineGlobeAlt,
  HiOutlineHome,
  HiOutlineUser,
  HiUser,
} from "react-icons/hi2"
import { LuEllipsis } from "react-icons/lu"

import { SIDEBAR_MORE, useSidebarStore } from "@/lib/store/sidebar-store"
import { SidebarNavLink } from "./sidebar-nav-link"

const SidebarNavLinkList = () => {
  const t = useTranslations("Navigation")
  const { setSidebarSheetContentId } = useSidebarStore()

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
        id={SIDEBAR_MORE}
        title={t("more")}
        icon={LuEllipsis}
        activeIcon={LuEllipsis}
        onClick={() => setSidebarSheetContentId(SIDEBAR_MORE)}
        href=""
      />
    </nav>
  )
}

export default SidebarNavLinkList
