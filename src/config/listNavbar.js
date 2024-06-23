"use client"

import { useTranslation } from "react-i18next"

const ListNavbar = () => {
    const { t } = useTranslation();

    const navbar = [
        {
            menu : t("navbar.home"),
            path: '#home'
        },
        {
            menu : t("navbar.techstack"),
            path: '#techstack'
        },
        {
            menu : t("navbar.projects"),
            path: '#project'
        },
        {
            menu : t("navbar.contact"),
            path: '#contact'
        },
        {
            menu : t("blogs.blog"),
            path: 'blog'
        }
    ]

    return navbar;
}

export default ListNavbar