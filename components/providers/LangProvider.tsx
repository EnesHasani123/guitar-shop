"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dictionaries, type Lang } from "@/lib/i18n";

type Ctx = {
  lang: Lang;
  t: (typeof dictionaries)["en"];
  tr: (
    key: keyof (typeof dictionaries)["en"],
    params?: Record<string, string | number>
  ) => string;
  setLang: (l: Lang) => void;
};

const I18nCtx = createContext<Ctx>({
  lang: "en",
  t: dictionaries.en,
  tr: (k) => dictionaries.en[k],
  setLang: () => {},
});

export const useI18n = () => useContext(I18nCtx);

function format(
  tpl: string,
  params?: Record<string, string | number>
) {
  if (!params) return tpl;
  return tpl.replace(/\{(\w+)\}/g, (_, k) =>
    String(params[k] ?? "")
  );
}

export default function LangProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Lang>("en");


  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? (localStorage.getItem("lang") as Lang)
        : null;
    if (
      saved &&
      (["en", "mk", "sq"] as Lang[]).includes(saved)
    )
      setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined")
      localStorage.setItem("lang", lang);
  }, [lang]);

  const value = useMemo<Ctx>(() => {
    const t = dictionaries[lang];
    const tr: Ctx["tr"] = (key, params) =>
      format(t[key], params);
    return { lang, t, tr, setLang };
  }, [lang]);

  return (
    <I18nCtx.Provider value={value}>
      {children}
    </I18nCtx.Provider>
  );
}
