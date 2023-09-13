import { 
  type FC,
  type ReactNode
} from "react";

import {
  type ActionFunction,
  redirect,
  useSubmit,
} from "react-router-dom";

import {
  Button,
  Group,
  Stack,
  TextInput,
} from "@mantine/core";

import { 
  useForm,
  zodResolver,
} from "@mantine/form";

import { 
  Database,
} from "../../../db";

import {
  Game,
} from "../../../schema/Game";


export const action: ActionFunction = async (props) => {
  const result = Game.safeParse(await props.request.json());
  if (result.success) {

    const db = new Database();
    const game = await db.games.add(result.data);
    return redirect(`../${game}`);
  }
  console.error(result.error);
  return null;
}

const CreateGame: FC<CreateGame.Props> = ({children}) => {
  const validation = useForm({
    validate: zodResolver(Game),
    initialValues: {
      name: "",
      expansions: [],
    },
    validateInputOnBlur: true,
  });
  const submit = useSubmit();
  return <form onSubmit={validation.onSubmit(values => { submit(values, { method: "POST", encType: "application/json" }); })}>
    <Stack>
      <TextInput
        label="Name"
        withAsterisk
        {...validation.getInputProps("name")}
      />
      <Group position="right">
        <Button disabled={!validation.isValid()} type="submit">Create</Button>
      </Group>
    </Stack>
  </form>
}

namespace CreateGame {
  export type Props = Readonly<{
    children?: ReactNode;
  }>;
}

export 
{
  CreateGame as Component,
}