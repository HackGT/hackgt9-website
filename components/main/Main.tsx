import { Button, Center, VStack, Text } from "@chakra-ui/react";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles.title_box}>
      <Center>
        <Text className={styles.title}>HackGT#</Text>
      </Center>
      <Center className={styles.description}>
        <VStack spacing="0.6rem" padding="1rem">
          <Text>Some witty catchphrase or something</Text>
          <Text>Coming soon to colleges near you</Text>
          <Button className={styles.register_button}>Register now</Button>
        </VStack>
      </Center>
    </div>
  );
};

export default Main;
