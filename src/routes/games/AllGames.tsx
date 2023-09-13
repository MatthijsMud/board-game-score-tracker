import { 
  type FC, 
} from "react";

import { 
  AspectRatio, 
  Card, 
  Grid, 
  Image, 
  Text, 
  Title, 
  Stack,
  TextInput, 
} from "@mantine/core";

import {
  type LoaderFunction, 
  Link,
  json,
  useLoaderData,
} from "react-router-dom";

import {
  useTranslation 
} from "react-i18next";

import {
  Database,
} from "../../db";

import {
  Game
} from "../../schema/Game";
import { IconSearch } from "@tabler/icons-react";

export const loader: LoaderFunction = async () => {
  const db = new Database();
  const result = Game.array().safeParse(await db.games.toArray());
  if (result.success) {
    return json(result.data);
  }
  return json([]);
}

const AllGames: FC<AllGames.Props> = () => {
  const { t } = useTranslation();
  const games = useLoaderData() as Game[];
  return <Stack>
    <Title>{t("app.games.title")}</Title>
    <TextInput icon={<IconSearch size="1em" />} placeholder={t("app.games.search")} />
    <Grid>
      {
        games.map((game, i) => {
          return <Grid.Col md={3} sm={4} xs={6} key={i}>
            <Card component={Link} to={`${game.id}`} p="lg">
              <Card.Section>
                <AspectRatio ratio={16/9}>
                  <Image height={200 * Math.random()} withPlaceholder />
                </AspectRatio>
              </Card.Section>
              <Text weight={500} size="lg" mt="md">{game.name}</Text>
            </Card>
          </Grid.Col>
        })
      }
      <Grid.Col md={4} sm={12}>
      </Grid.Col>
    </Grid>
  </Stack>
}

namespace AllGames {
  export type Props = Readonly<{

  }>;
}

export {
  AllGames as Component,
}