import { Center, Image, Text, VStack } from "@chakra-ui/react";
import TD from "../TD";
import styles from "../TracksChallenges.module.scss";

import gt from "./general_tracks.json";

const GeneralTracks = () => {
  return (
    <div id={styles.general_track_container}>
      <Image
        draggable="false"
        alt="faint pink thing"
        src="/svg/general_track/pink_ellipse.svg"
        id={styles.faint_pink_ellipse}
      />
      <Image
        draggable="false"
        alt="blue 0.0"
        src="/svg/general_track/dark_blue_ellipse.svg"
        id={styles.blue_ellipse}
      />
      <VStack spacing={"2rem"}>
        <Center>
          <VStack>
            <Text className={styles.subheader}>General Tracks</Text>
            <Text className={styles.subtext}>
              {"Don't"} know what project to craft? No worries! You can compete for one of our track
              prizes or create something entirely unique.
            </Text>
            <Text className={styles.subtext}>Click each track to learn more.</Text>
          </VStack>
        </Center>
        <VStack spacing={"20px"}>
          {gt.general_tracks.map((entry) => (
            <div key={null} className={styles.clickable}>
              <TD key={null} track={entry.name} description={entry.description} />
            </div>
          ))}
        </VStack>
      </VStack>
    </div>
  );
};

export default GeneralTracks;
