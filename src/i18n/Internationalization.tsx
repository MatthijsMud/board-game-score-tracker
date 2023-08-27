import { type FC, type ReactNode, Suspense, useMemo } from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import ChainedBackend from "i18next-chained-backend";
import resourcesToBackend from "i18next-resources-to-backend";

export const Internationalization: FC<{ children: ReactNode }> = ({ children }) => {
  const i18n = useMemo(() => {
    const ouput = i18next.createInstance({
      lng: "en",
      supportedLngs: [
        // TODO: Replace with a solution that does not hardcode the available languages
        "en",
        "nl",
        // For some purposes, such as a language picker, it is desirable to show
        // text in a different locale than the currently selected one. Having
        // a mixed locale prevents having to download each translation file just
        // for one such string.
        "mixed",
      ],
      fallbackLng: {
        default: ["en"]
      }
    });
    ouput.use(ChainedBackend).init({
      backend: {
        backends: [
          resourcesToBackend((language: string, namespace: string) => import(`./${language}/${namespace}.json`)),
        ]
      }
    });
    return ouput;
  }, []);

  return <I18nextProvider i18n={i18n}>
    <Suspense>
      {children}
    </Suspense>
  </I18nextProvider>
}