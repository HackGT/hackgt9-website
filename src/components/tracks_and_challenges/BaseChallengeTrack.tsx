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
        <Text className={styles.header}>Modes</Text>
        <Text className={styles.subtext}>
          Are you an experienced or a beginner player in the hackathon game? We have two modes for
          you to select from. Click each mode to learn more.
        </Text>
        <Wrap margin={"0px"} justify={"center"} spacing={{ base: "0px" }}>
          <div id={styles.general}>
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
                  minHeight={{ base: "none", md: "330px" }}
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
          </div>
          <div id={styles.emerging}>
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
                  minHeight={{ base: "none", md: "330px" }}
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
          </div>
        </Wrap>
        <Text className={styles.subtext} id={styles.only_one_mode}>
          You may only apply to one mode. We will be limiting the number of Emerging hackers to
          ensure we have enough resources to offer all participants a great experience. We recommend
          you apply to the one that suits you the most!
        </Text>
      </VStack>
    </Center>
  );
};

export default ChallengeTrackBase;
