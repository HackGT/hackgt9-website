import { Center, VStack, Text, Link, HStack, Image, Box } from "@chakra-ui/react";
import styles from "./Main.module.scss";

interface MainProps {
  toJump: string;
}

const Main = (mp: MainProps) => {
  return (
    <div className={styles.title_box}>
      <Center>
        <Image
          draggable="false"
          className={styles.logo}
          objectFit="contain"
          alt="logo"
          boxSize={"60vw"}
          src="/img/main/logo/hackgt9logo.png"
        />
      </Center>
      <HStack>
        <Image
          draggable="false"
          className={styles.logoBig}
          objectFit="contain"
          alt="logo"
          boxSize={"45vw"}
          zIndex="1"
          src="/img/main/logo/hackgt9logo.png"
          />
        <Center>
        <VStack className={styles.title_stack} >
          <Text className={styles.title}>HackGT 9</Text>
          <Box>
          <Center className={styles.description}>
            <Text className={styles.motto}>Retro Reset</Text>
            </Center>
          </Box>
          <Center>
            <Link href="https://registration.hexlabs.org" target="_blank">
            <Box className={styles.register_button}>
              <div className={styles.register_button_outer} />
              <div className={styles.register_button_inner} />
              <div className={styles.loading_bar_position}>
                <div className={styles.loading_bar_mask}>
                  <div className={styles.loading_bar} />
                </div>
              </div>
              <Center>
                <Text className={styles.register_button_text}>Register now</Text>
              </Center>
            </Box>
            </Link>
          </Center>
        </VStack>
      </Center>
        </HStack>
    </div>
  );
};

export default Main;
