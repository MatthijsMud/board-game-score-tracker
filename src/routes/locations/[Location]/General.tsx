import {
  type FC,
} from "react";

import {
  type LoaderFunction,
  json,
} from "react-router-dom";

export const loader: LoaderFunction = ({}) => {
  return json({

  });
}

const Location: FC<Location.Props> = ({}) => {
  return <>
  </>
}

namespace Location {
  export type Props = Readonly<{
  }>;
}

export {
  Location as Component,
}