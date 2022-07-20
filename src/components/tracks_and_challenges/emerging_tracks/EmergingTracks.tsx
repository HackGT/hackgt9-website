import { Center, Text, VStack, Image } from "@chakra-ui/react";
import TD from "../TD";
import styles from "../TracksChallenges.module.scss";

import et from "./emerging_tracks.json";

const EmergingTracks = () => {
  return (
    <div id={styles.emerging_track_container}>
      <VStack spacing={"2rem"}>
        <Center>
          <VStack>
            <Text className={styles.subheader}>Emerging</Text>
            <Text className={styles.subtext}>
              Last year for HackGT 8 we provided learning paths, comprised of workshops and guides,
              for new hackers to follow. {"Here's"} what was featured last year.
              <br />
              <br />
              This year, we plan on placing more emphasis on workshops and allowing all members,
              experienced and new alike, to participate. Check back for what workshops {
                "we'll"
              }{" "}
              feature for HackGT 9!
            </Text>
            <Text className={styles.subtext}>Click each path to learn more.</Text>
          </VStack>
        </Center>
        <VStack spacing={"20px"}>
          {et.emerging_tracks.map((entry) => (
            <div key={null} className={styles.clickable}>
              <TD key={null} track={entry.name} description={entry.description} />
            </div>
          ))}
        </VStack>
      </VStack>
    </div>
  );
};

export default EmergingTracks;
