import { Center, Text, VStack, Image } from "@chakra-ui/react";
import TD from "../TD";
import styles from "../TracksChallenges.module.scss";

import et from "./emerging_tracks.json";

const EmergingTracks = () => {
  return (
    <div id={styles.emerging_track_container}>
      <Image
        draggable="false"
        alt="pink circle thingie"
        src="/svg/emerging_track/giant_pink_ellipse.svg"
        id={styles.giant_pink_ellipse}
      />
      <Image
        draggable="false"
        alt="blue thingie"
        src="/svg/emerging_track/faint_blue_ellipse.svg"
        id={styles.faint_blue_ellipse}
      />
      <Image
        draggable="false"
        alt="yellow thing"
        src="/svg/emerging_track/yellow_streak.svg"
        id={styles.yellow_streak}
      />
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
