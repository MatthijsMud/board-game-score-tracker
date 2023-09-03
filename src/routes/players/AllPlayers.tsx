import { type FC } from "react";
import { z } from "zod";
import { Grid, Stack, } from "@mantine/core";
import { type LoaderFunction, useLoaderData } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IconPlus, IconUser } from "@tabler/icons-react";
import { Database } from "../../db";
import { Player } from "../../schema/Player";
import { CardLink } from "../../components/CardLink";

const Players = z.array(Player);

export const loader: LoaderFunction = async () => {
  const db = new Database();
  const data = await db.players.toArray();

  const result = Players.safeParse(data);
  if (result.success) {
    return result.data;
  }
  return [];
}

const AllPlayers: FC<AllPlayers.Props> = ({}) => {
  const players: z.infer<typeof Players> = useLoaderData() as any;
  const { t } = useTranslation();
  return <Stack>
    <Grid>
      <Grid.Col md={3} sm={4} xs={6}>
        <CardLink to="new" ratio={1} title={t("app.players.add")}>
          <IconPlus size="2.5em" />
        </CardLink>
        
      </Grid.Col>
      {players.map(player => {
        return <Grid.Col md={3} sm={4} xs={6} key={player.id}>
          <CardLink to={player.id?.toString() ?? "" } ratio={1} title={player.name} image={player.image}>
            <IconUser size="2.5em" />
          </CardLink>
        </Grid.Col>
      })}
    </Grid>
  </Stack>
}

namespace AllPlayers {
  export type Props = Readonly<{

  }>;
}

export {
  AllPlayers as Component,
}