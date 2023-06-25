import { type FC, type ReactNode, Suspense } from "react";
import { Grid, createStyles } from "@mantine/core";
import { CardLink } from "../components/CardLink";

const useStyles = createStyles(() => ({
  // By default cards don't fill their parent's full height, 
  fullHeight: {
    height: "100%",
  }
}));

const links: CardLink.Props[] = [
  { 
    title: "Play",
    description: "Quickly start a game based on preferences and availabilty",
    to: "play",
  },
  { 
    title: "Players",
    description: "View a player's scores and which games they tend to play" ,
    to: "players",
  },
  {
    title: "Games",
    description: "Overview of games out there",
    to: "games",
  },
  {
    title: "Locations",
    description: "Places where games can be played",
    to: "locations",
  }
];

export const Component: FC<{ children?: ReactNode }> = () => {
  const { classes } = useStyles();
  
  return <Suspense>
    <Grid>
      {links.map((link, i) => <Grid.Col md={3} sm={4} xs={6} key={i}>
        <CardLink className={classes.fullHeight} {...link} />
      </Grid.Col>)}
    </Grid>
  </Suspense>
}