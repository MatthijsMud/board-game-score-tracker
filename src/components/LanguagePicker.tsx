import { type FC } from "react";
import { Select, type SelectItem } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { IconLanguage } from "@tabler/icons-react";


export const LanguagePicker: FC = () => {
  const { i18n, t, ready } = useTranslation("languages", { useSuspense: false });
  const languages = ready 
    ? (i18n.options.supportedLngs || [])
      // "cimode" is always present, depite not representing an actual language.
      // It is mainly used for development purposes to determine keys are missing.
      .filter(x => x !== "cimode")
      .map(language => {
        return  {
          value: language,
          label: t(language, { lng: language })
        } as SelectItem;
      })
    : [ ];

  return <Select
    icon={<IconLanguage size="1em" />} 
    placeholder="Language" 
    disabled={!ready}
    data={languages}
    value={i18n.language}
    onChange={value => i18n.changeLanguage(value!)}
  />
}