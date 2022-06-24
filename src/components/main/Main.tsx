import { Center, VStack, Text, Link, Image, Box } from "@chakra-ui/react";
import styles from "./Main.module.scss";

interface MainProps {
  toJump: string;
}

const Main = (mp: MainProps) => {
  return (
    <div className={styles.title_box}>
      <Center>
        <Text className={styles.title}>HackGT 9</Text>
      </Center>
      <Center className={styles.description}>
        <VStack>
          <Text className={styles.motto}>Retro Reset</Text>
          <Box className={styles.register_button}>
            <div className={styles.register_button_outer} />
            <div className={styles.register_button_inner} />
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
