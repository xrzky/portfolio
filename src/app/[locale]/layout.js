import { Inter } from "next/font/google";
import "./globals.css";
import i18nConfig from '../../../i18nConfig';
import { dir } from 'i18next';
import Navbar from "@/components/navbar";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

const inter = Inter({ subsets: ["latin"] });
const i18nNamespaces = ["common"];

export const metadata = {
  title: "Luki Rizki"
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <html lang={locale} dir={dir(locale)}>
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNamespaces}
      >
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
      </TranslationsProvider>
    </html>
  );
}
