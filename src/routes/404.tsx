import { type FC } from "react";
import { Title, Text, Stack, } from "@mantine/core";
import { useTranslation } from "react-i18next";

export const NotFound: FC<NotFound.Props> = ({}) => {
  const { t } = useTranslation();
  return <Stack>
    <Title order={2}>{t("app.404.title")}</Title>
    <Text>{t("app.404.description")}</Text>
  </Stack>
}

export namespace NotFound {
  export type Props = Readonly<{

  }>;
}