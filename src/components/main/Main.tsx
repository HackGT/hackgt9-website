import { Center, VStack, Text, Link } from "@chakra-ui/react";
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
          <Link
            style={{ textDecoration: "none" }}
            href={mp.toJump}
            className={styles.register_button}
          >
            Register now
          </Link>
        </VStack>
      </Center>
    </div>
  );
};

export default Main;
