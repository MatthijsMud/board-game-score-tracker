import { type FC } from "react";
import { Select, type SelectItem } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { IconLanguage } from "@tabler/icons-react";

export const LanguagePicker: FC = () => {
  const { i18n, t, ready } = useTranslation("languages", { useSuspense: false, lng: "mixed" });
  const languages = ready 
    ? (i18n.options.supportedLngs || [])
      // "cimode" is used for development purposes (identifying missing keys),
      // it does not represent an actual language. Therefore it should not be
      // selectable.
      .filter(x => x !== "cimode" && x !== "mixed")
      .map(language => {
        return  {
          value: language,
          label: t(language)
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