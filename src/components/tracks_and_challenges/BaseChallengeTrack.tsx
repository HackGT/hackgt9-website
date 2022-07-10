import { Text, HStack, Center, VStack, Wrap, Image, Box, Link } from "@chakra-ui/react";
import BaseComponent from "./BaseComponent";

import styles from "./TracksChallenges.module.scss";

import tracks from "./tracks.json";

const ChallengeTrackBase = () => {
  return (
    <Center className={styles.container}>
      <Image id={styles.pink_ellipse} alt="pink ellipse" src="/svg/tracks/pink_ellipse.svg" />
      <Image id={styles.teal_ellipse} alt="teal ellipse" src="/svg/tracks/teal_ellipse.svg" />
      <Image
        id={styles.faint_blue_ellipse}
        alt="faint blue ellipse"
        src="/svg/tracks/faint_blue_ellipse.svg"
      />
      <Image
        id={styles.giant_faint_pink_ellipse}
        alt="giant pink ellipse"
        src="/svg/tracks/giant_faint_pink_ellipse.svg"
      />
      <VStack>
        <Text className={styles.header}>Tracks</Text>
        <Text className={styles.subtext}>
          Are you an experienced or a beginner player in the hackathon game? We have two modes for
          you to select from. Click each track to learn more.
        </Text>

        <Wrap justify={"center"} spacing={{ base: "0px", md: "7vw" }}>
          <VStack>
            <Image
              className={styles.not_background}
              alt="blue console"
              src="/img/tracks/player_blue.png"
              boxSize={{ base: "60vw", md: "30vw", lg: "25vw" }}
              objectFit="contain"
            />
            <Link href={tracks.tracks[0].id} style={{ textDecoration: "none" }}>
              <Box
                className={styles.track_container}
                width={{ base: "70vw", lg: "500px" }}
                minHeight={{ base: "none", md: "380px", lg: "500px" }}
              >
                <BaseComponent
                  key={tracks.tracks[0].name}
                  name={tracks.tracks[0].name}
                  description={tracks.tracks[0].description}
                  prize={null}
                />
              </Box>
            </Link>
          </VStack>
          <VStack>
            <Image
              className={styles.not_background}
              alt="pink console"
              src="/img/tracks/player_pink.png"
              boxSize={{ base: "60vw", md: "30vw", lg: "25vw" }}
              objectFit="contain"
            />
            <Link href={tracks.tracks[1].id} style={{ textDecoration: "none" }}>
              <Box
                className={styles.track_container}
                width={{ base: "70vw", lg: "500px" }}
                minHeight={{ base: "none", md: "470px", lg: "500px" }}
              >
                <BaseComponent
                  key={tracks.tracks[1].name}
                  name={tracks.tracks[1].name}
                  description={tracks.tracks[1].description}
                  prize={null}
                />
              </Box>
            </Link>
          </VStack>
        </Wrap>
      </VStack>
    </Center>
  );
};

export default ChallengeTrackBase;
