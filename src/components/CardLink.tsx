import { memo } from "react";
import type { FC } from "react";
import { 
  AspectRatio,
  Card, 
  DefaultMantineColor, 
  Image,
  Text,
  createStyles,
} from "@mantine/core";
import { IconPhoto } from "@tabler/icons-react";
import { Link, type LinkProps } from "react-router-dom";

const useStyles = createStyles(theme => ({
  card: {
    transition: "transform ease 150ms, box-shadow ease 150ms",
    ...theme.fn.focusStyles(),
    "&:hover": {
      transform: "scale(1.03125)",
      boxShadow: theme.shadows.md
    }
  }
}));

export const CardLink: FC<CardLink.Props> = memo(({ 
  className,
  ratio,
  image,
  title,
  description,
  color,
  ...other
}) => {
  const { classes, cx } = useStyles();
  return <Card className={cx(classes.card, className)} component={Link} withBorder tabIndex={0} {...other}>
    <Card.Section>
      <AspectRatio ratio={ratio ?? (16 / 9)} sx={(theme)=>({ stroke: theme.fn.darken(theme.fn.themeColor(color ?? "", undefined, false), 0.1), backgroundColor: theme.fn.themeColor(color ?? "", undefined, false, true)})}>
        <Image src={image} fit="cover" withPlaceholder placeholder={<div>{other.children ?? <IconPhoto size="2.5em" />}</div>} />
      </AspectRatio>
    </Card.Section>
    <Text weight={500} size="lg" mt="md" truncate>{title}</Text>
    <Text>{description}</Text>
  </Card>
});

export namespace CardLink {
  export type Props = Readonly<{
    className?: string | undefined;
    ratio?: number;
    image?: string | undefined;
    title?: string;
    description?: string | undefined;
    color?: DefaultMantineColor
  }> & LinkProps
}