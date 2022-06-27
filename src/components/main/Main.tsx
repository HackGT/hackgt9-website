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
          className={styles.logo}
          objectFit="contain"
          alt="logo"
          boxSize={"60vw"}
          src="/img/sponsors/space_efficient_cat_sponsor.png"
        />
      </Center>
      <Center>
        <Text className={styles.title}>HackGT 9</Text>
      </Center>
      <Center className={styles.description}>
        <VStack>
          <Text className={styles.motto}>Retro Reset</Text>
          <Box className={styles.register_button}>
            <div className={styles.register_button_outer} />
            <div className={styles.register_button_inner} />
            <div className={styles.loading_bar_position}>
              <div className={styles.loading_bar_mask}>
                <div className={styles.loading_bar} />
              </div>
            </div>
            <Link
              className={styles.register_button_text}
              style={{ textDecoration: "none" }}
              href={mp.toJump}
            >
              Register now
            </Link>
          </Box>
        </VStack>
      </Center>
    </div>
  );
};

export default Main;
