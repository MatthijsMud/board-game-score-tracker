import { type FC } from "react";
import { z } from "zod";
import { Button, Grid, Stack, } from "@mantine/core";
import { type LoaderFunction, useLoaderData, Link } from "react-router-dom";
import { IconPlus, IconUser, IconUsers } from "@tabler/icons-react";
import { Database } from "../../db";
import { Player } from "../../schema/Player";
import { CardLink } from "../../components/CardLink";

const Players = z.array(Player);

export const loader: LoaderFunction = async () => {
  const db = new Database();
  const data = await db.players.limit(10).toArray();

  const result = Players.safeParse(data);
  if (result.success) {
    return result.data;
  }
  return [];
}

const AllPlayers: FC<AllPlayers.Props> = ({}) => {
  const players: z.infer<typeof Players> = useLoaderData() as any;
  return <Stack>
    <Grid>
      <Grid.Col md={3} sm={4} xs={6}>
        <CardLink to="new" title="Add new player">
          <IconPlus size="2.5em" />
        </CardLink>
        
      </Grid.Col>
      {players.map(player => {
        return <Grid.Col md={3} sm={4} xs={6} key={player.id}>
          <CardLink to={player.id?.toString() ?? "" } title={player.name} >
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