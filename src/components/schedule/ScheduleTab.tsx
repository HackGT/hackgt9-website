import { Center, Text, VStack, Image } from "@chakra-ui/react";
import React from "react";
import ComingSoon from "./ComingSoon";
import Schedule from "./Schedule";

import styles from "./Schedule.module.scss";

type Props = {
  virtual: boolean;
};

// note: remove the Center and VStack Component when bring in the schedule

const ScheduleTab: React.FC<Props> = (props: Props) => (
  <div className={styles.container}>
    <Image
      id={styles.dark_blue_ellipse}
      alt="blue ellipse thingy"
      src="/svg/schedule/dark_blue_ellipse.svg"
    />
    <Image
      id={styles.faint_blue_ellipse}
      alt="faint blue ellipse"
      src="/svg/schedule/faint_blue_ellipse.svg"
    />
    <Image id={styles.pink_streak} alt="pink thing" src="/svg/schedule/pink_streak.svg" />
    <Image id={styles.red_streak} alt="red thingy" src="/svg/schedule/red_streak.svg" />
    <Center>
      <VStack>
        <Text className={styles.title}>Schedule</Text>
        {/* <Schedule tableLength={Infinity} homepage={false} virtual={props.virtual} /> */}
        <ComingSoon />
      </VStack>
    </Center>
  </div>
);
export default ScheduleTab;
