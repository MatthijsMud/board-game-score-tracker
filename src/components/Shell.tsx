import { type FC, type ReactNode } from "react";
import {
  Container,
  Group,
  Paper,
  Stack,
  Title,
  Anchor,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { LanguagePicker } from "./LanguagePicker";
import { ThemePicker } from "./ThemePicker";
import { NavLink } from "react-router-dom";
import { IconChevronLeft } from "@tabler/icons-react";


const Header = () => {
  const { t, ready } = useTranslation("translation", { useSuspense: false });
  return <Paper component="header" py="sm">
    <Stack>
      <Group position="apart" noWrap>
        <Group sx={{ overflow: "hidden"}}>
          <Title truncate>{ready && t("app.title")}</Title>
        </Group>
        <Group noWrap spacing="sm">
          <LanguagePicker />
          <ThemePicker />
        </Group>
      </Group>
      <Anchor component={NavLink} to=".." relative="path">
        <Group>
          <IconChevronLeft size="1em" />
          Back
        </Group>
      </Anchor>
    </Stack>
  </Paper>
}

export const Shell: FC<Shell.Props> = ({ children }) => {
  return <Container size="lg">
    <Stack>
      <Header />
      <main>
        {children}
      </main>
    </Stack>
  </Container>
}

export namespace Shell {
  export type Props = Readonly<{
    children?: ReactNode;
  }>;
}