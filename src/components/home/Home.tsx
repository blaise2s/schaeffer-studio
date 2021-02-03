import React from "react";
import {
  createStyles,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";

import Parallax from "../parallax/Parallax";

import studio1 from "../../assets/images/studio-1.jpg";
import wedding1 from "../../assets/images/wedding-1.jpg";
import wedding2 from "../../assets/images/wedding-2.jpg";
import collab1 from "../../assets/images/collab-1.jpg";
import kanban1 from "../../assets/images/kanban-1.jpg";
import digitalMedia1 from "../../assets/images/digital-media-1.jpg";
import maze1 from "../../assets/images/maze-1.jpg";

const useStyles = makeStyles(() =>
  createStyles({
    parallaxSandwich: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "20vh",
      textAlign: "center",
    },
    home: {
      maxHeight: "100vh",
      overflowY: "scroll",
      scrollSnapType: "y mandatory",
    },
    section: {
      scrollSnapAlign: "start",
    },
    welcomeContainer: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      textAlign: "center",
    },
    welcomeMessage: {
      padding: "1rem",
      // background: '#000000ad',
      borderRadius: "1rem",
      color: "#ffffff",
    },
    contactUs: {
      color: "#ffffff",
    },
  })
);

const Home: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.home}>
      <section className={styles.section}>
        <Parallax height="100vh" imgSrc={studio1}>
          <div className={styles.welcomeContainer}>
            <div className={styles.welcomeMessage}>
              {/* <Typography variant='h1'>Schaeffer Studio</Typography> */}
              <Typography variant="h1">Schaeffer</Typography>
              <Typography variant="h1">Studio</Typography>
            </div>
            <div>
              <Button
                className={styles.contactUs}
                href="mailto:schaeffer.studio@gmail.com"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Parallax>
      </section>
      <section className={styles.section}>
        <Parallax height="40vh" imgSrc={collab1} />
        <div className={styles.parallaxSandwich}>
          <Typography variant="h2">Website Creation &amp; Design</Typography>
        </div>
        <Parallax height="40vh" imgSrc={kanban1} />
      </section>
      <section className={styles.section}>
        <Parallax height="40vh" imgSrc={wedding1} />
        <div className={styles.parallaxSandwich}>
          <Typography variant="h2">Photography</Typography>
        </div>
        <Parallax height="40vh" imgSrc={wedding2} />
      </section>
      <section className={styles.section}>
        <Parallax height="40vh" imgSrc={digitalMedia1} />
        <div className={styles.parallaxSandwich}>
          <Typography variant="h2">Marketing &amp; Digital Media</Typography>
        </div>
        <Parallax height="40vh" imgSrc={maze1} />
      </section>
    </div>
  );
};

export default Home;
