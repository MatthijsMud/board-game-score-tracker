import { type FC } from "react";
import { Button, Group, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { Database } from "../../../db";
import { Player } from "../../../schema/Player";
import { type ActionFunction, useSubmit, redirect } from "react-router-dom";

export const action: ActionFunction = async (props) => {
  try {
    const json = await props.request.json();
    const result = Player.safeParse(json);
    if (result.success) {
      const db = new Database();
      const id = await db.players.add(result.data);
      return redirect(`../${id}`);
    }
  } 
  catch (error: unknown) {
    console.error(error);
  }
  return null;
}

const CreatePlayer: FC = ({}) => {
  const validation = useForm({
    validate: zodResolver(Player),
    initialValues: {
      name: ""
    },
    validateInputOnBlur: true,
  });
  const submit = useSubmit();

  return <form onSubmit={validation.onSubmit((values) => { submit(values, {method: "post", encType: "application/json" })})}>
    <TextInput 
    name="name"
      label="Name" 
      description="Name used to identify the player"
      withAsterisk
      {...validation.getInputProps("name")}
    />
    <Group position="right">
      <Button type="submit">Create</Button>
    </Group>
  </form>
}

export {
  CreatePlayer as Component,
}