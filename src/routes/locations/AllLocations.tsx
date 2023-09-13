import { 
  type FC,
} from "react";

import {
  useTranslation,
} from "react-i18next";

import {
  Stack,
  Title,
} from "@mantine/core";

const AllLocations: FC<AllLocations.Props> = ({}) => {
  const { t } = useTranslation();
  return <Stack>
    <Title order={2}>{t("app.locations.title")}</Title>
  </Stack>
}

namespace AllLocations {
  export type Props = Readonly<{
  }>;
}

export {
  AllLocations as Component,
}