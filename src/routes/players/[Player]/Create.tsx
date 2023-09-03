import { type FC, useState, useEffect } from "react";
import { Button, Group, Image, Stack, Text, TextInput, rem } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { Dropzone, IMAGE_MIME_TYPE, type FileWithPath } from "@mantine/dropzone";
import { Database } from "../../../db";
import { Player } from "../../../schema/Player";
import { type ActionFunction, useSubmit, redirect } from "react-router-dom";
import { IconPhoto, IconUpload, IconX } from "@tabler/icons-react";

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
  const [files, setFiles] = useState<readonly FileWithPath[]>([]);
  useEffect(() => {
    const cleanups = files.map(file => {
      const reader = new FileReader();
      const loaded = () => {
        const result = reader.result;
        if (typeof result === "string") {
          validation.setFieldValue("image", result);
        }
      }
      reader.addEventListener("load", loaded);
      reader.readAsDataURL(file);

      return () => {
        reader.removeEventListener("load", loaded);

      }
    });
    return () => {
      cleanups.forEach(cleanup => cleanup());
    }
  }, [files]);
  const validation = useForm({
    validate: zodResolver(Player),
    initialValues: {
      name: "",
      image: null as (string | null),
    },
    validateInputOnBlur: true,
  });
  const submit = useSubmit();

  return <form onSubmit={validation.onSubmit((values) => { submit(values, {method: "post", encType: "application/json" })})}>
    <Stack>
      <TextInput 
      name="name"
        label="Name" 
        description="Name used to identify the player"
        withAsterisk
        {...validation.getInputProps("name")}
      />
      <Dropzone onDrop={setFiles} accept={IMAGE_MIME_TYPE}>
        {
          validation.values.image ? 
            <Image src={validation.values.image} /> : <>
            <Group position="center" style={{ minHeight: rem(200), pointerEvents: "none" }}>
              <Dropzone.Accept>
                <IconUpload size="3.2em" stroke={1.5} />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX size="3.2em" stroke={1.5} />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconPhoto size="3.2em" stroke={1.5} />
              </Dropzone.Idle>
              <div>
                <Text>

                </Text>
                <Text>

                </Text>
              </div>
            </Group>
          </>
        }
      </Dropzone>
      <Group position="right">
        <Button type="submit">Create</Button>
      </Group>
    </Stack>
  </form>
}

export {
  CreatePlayer as Component,
}