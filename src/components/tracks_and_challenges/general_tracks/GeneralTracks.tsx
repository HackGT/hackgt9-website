import { Center, Image, Text, VStack } from "@chakra-ui/react";
import TD from "../TD";
import styles from "../TracksChallenges.module.scss";

import gt from "./general_tracks.json";

const GeneralTracks = () => {
  return (
    <div id={styles.general_track_container}>
      <Image
        alt="faint pink thing"
        src="/svg/general_track/pink_ellipse.svg"
        id={styles.faint_pink_ellipse}
      />
      <Image
        alt="blue 0.0"
        src="/svg/general_track/dark_blue_ellipse.svg"
        id={styles.blue_ellipse}
      />
      <VStack spacing={"2rem"}>
        <Center>
          <Text className={styles.subheader}>General Tracks</Text>
        </Center>
        <VStack spacing={"20px"}>
          {gt.general_tracks.map((entry) => (
            <TD key={null} track={entry.name} description={entry.description} />
          ))}
        </VStack>
      </VStack>
    </div>
  );
};

export default GeneralTracks;
