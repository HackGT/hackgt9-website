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
    <VStack>
      <Text className={styles.title}>Schedule</Text>
      <Schedule tableLength={Infinity} homepage={false} virtual={props.virtual} />
    </VStack>
  </div>
);
export default ScheduleTab;
