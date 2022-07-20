import { Center, VStack, Text, Link, Image, Box } from "@chakra-ui/react";
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
          boxSize={"50vw"}
          src="/img/main/logo/hackgt9logo.png"
        />
      </Center>
      <Center>
        <Text className={styles.title}>HackGT 9</Text>
      </Center>
      <Center className={styles.description}>
        <VStack>
          <Text className={styles.motto}>Retro Reset</Text>
          {/* <Link href="https://www.merriam-webster.com/dictionary/registration" target="_blank"> */}
          <Box className={styles.register_button}>
            <div className={styles.register_button_outer} />
            <div className={styles.register_button_inner} />
            <div className={styles.loading_bar_position}>
              <div className={styles.loading_bar_mask}>
                <div className={styles.loading_bar} />
              </div>
            </div>
            <Center>
              <Text className={styles.register_button_text}>Registration Coming Soon</Text>
            </Center>
          </Box>
          {/* </Link> */}
        </VStack>
      </Center>
    </div>
  );
};

export default Main;
