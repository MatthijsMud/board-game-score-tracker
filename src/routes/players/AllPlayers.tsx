import { type FC } from "react";
import { z } from "zod";
import { Button } from "@mantine/core";
import { type LoaderFunction, useLoaderData, Link } from "react-router-dom";
import { IconPlus } from "@tabler/icons-react";
import { Player } from "../../schema/Player";

const Players = z.array(Player);

export const loader: LoaderFunction = () => {
  const data = JSON.parse(localStorage.getItem("players") ?? "[]");
  const result = Players.safeParse(data);
  if (result.success) {
    return result.data;
  }
  return [];
}

const AllPlayers: FC<AllPlayers.Props> = ({}) => {
  const players: z.infer<typeof Players> = useLoaderData() as any;
  return <ul>
    {players.map((player, i) => {
      return <li key={i}>
        {player.name}
      </li>
    })}
    <li>
      <Button component={Link} to="new" leftIcon={<IconPlus size="1em"/>}>Add new player</Button>
    </li>
  </ul>
}

namespace AllPlayers {
  export type Props = Readonly<{

  }>;
}

export {
  AllPlayers as Component,
}