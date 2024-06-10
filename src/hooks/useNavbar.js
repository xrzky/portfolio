import { useState, useEffect} from "react";
import { useTranslation } from "react-i18next";

const useNavbar = () => {
  const { t, i18n } = useTranslation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  const handleLanguageToggle = () => {
    const newLanguage = language === "en" ? "id" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  useEffect(() => {
    const handleClickOutNavbar = (event) => {
      const mobileNav = document.getElementById("mobile-nav");

      if (!mobileNav.contains(event.target)) {
        closeMobileNav();
      }
    };

    document.addEventListener("click", handleClickOutNavbar);

    return () => {
      document.removeEventListener("click", handleClickOutNavbar);
    };
  }, [mobileNavOpen]);
  return {
    t,
    language,
    mobileNavOpen,
    toggleMobileNav,
    closeMobileNav,
    handleLanguageToggle
  }
};

export default useNavbar;