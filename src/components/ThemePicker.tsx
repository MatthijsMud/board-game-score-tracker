import { type FC, memo } from "react";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export const ThemePicker: FC<ThemePicker.Props> = memo(({ }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return <ActionIcon variant="default" c={ colorScheme === "dark" ? "yellow" : "blue" } onClick={() => toggleColorScheme()}>
    { colorScheme === "dark" ? <IconSun size="1rem" /> : <IconMoonStars size="1rem" />}
  </ActionIcon>
});

export namespace ThemePicker {
  export type Props = Readonly<{

  }>;
}