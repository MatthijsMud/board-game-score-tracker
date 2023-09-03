import type { FC, ReactNode } from "react";
import { Avatar, Group, Title, Stack, ActionIcon, Menu } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { type LoaderFunction, useLoaderData, ActionFunction, useSubmit, redirect, } from "react-router-dom";
import { IconTrash, IconSettings, } from "@tabler/icons-react";
import { Database } from "../../../db";
import { Player } from "../../../schema/Player";
import { Session } from "../../../schema/Session";

export const loader: LoaderFunction = async ({ params }) => {
  const playerId = Number.parseInt(params["playerId"] ?? "0");
  const db = new Database();
  const [player, sessions] = await db.transaction("readonly", db.players, db.sessions, () => {
    return Promise.all([
      db.players.get({ id: playerId }),
      db.sessions.where({ playerIds: playerId }).toArray(),
    ]);
  });
  return [player, sessions];
}

export const action: ActionFunction = async ({ params }) => {
  const db = new Database();
  await db.players.where({ id: Number.parseInt(params["playerId"] ?? "0")}).delete();
  return redirect("..");
}

export const Component: FC<{ children?: ReactNode }> = ({}) => {
  const data = useLoaderData() as unknown as [Player, Session[]];
  const submit = useSubmit();
  return <Stack>
    <Group position="apart">
      <Group>
        <Avatar src={data[0].image}>

        </Avatar>
        <Title order={2}>
          {data[0].name}
        </Title>
      </Group>
      <Menu>
        <Menu.Target>
          <ActionIcon>
            <IconSettings size="1em" />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item color="red" icon={<IconTrash size="1em" />} onClick={() => submit({}, { method: "POST" })}>
            Delete
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
    <DataTable
      records={data[1]}
      columns={[
        { accessor: "avatar", title: "", render: () => <Avatar />, width: "auto" },
        { accessor: "name", title: "" },
        { accessor: "players", title: "Players", render: () => {
          return <Avatar.Group>
            <Avatar/>
            <Avatar/>
            <Avatar/>
          </Avatar.Group>
        }}
      ]}
    />
  </Stack>
}