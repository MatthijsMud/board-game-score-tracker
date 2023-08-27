import { type FC } from "react";
import { Title, Text, } from "@mantine/core";
import { useTranslation } from "react-i18next";

export const NotFound: FC<NotFound.Props> = ({}) => {
  const { t } = useTranslation();
  return <>
    <Title>{t("app.404.title")}</Title>
    <Text>{t("app.404.description")}</Text>
  </>
}

export namespace NotFound {
  export type Props = Readonly<{

  }>;
}