import { type FC, type ReactNode } from "react";
import {
  Container,
  Group,
  Stack,
  Title,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { LanguagePicker } from "./LanguagePicker";
import { ThemePicker } from "./ThemePicker";


const Header = () => {
  const { t, ready } = useTranslation("translation", { useSuspense: false });
  return <header>
    <Group position="apart" noWrap>
      <Group sx={{ overflow: "hidden"}}>
        <Title truncate>{ready && t("app.title")}</Title>
      </Group>
      <Group noWrap spacing="sm">
        <LanguagePicker />
        <ThemePicker />
      </Group>
    </Group>
  </header>
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