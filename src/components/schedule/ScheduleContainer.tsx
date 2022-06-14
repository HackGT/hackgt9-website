import { Center, Text } from "@chakra-ui/react";
import { useState } from "react";

import ComingSoon from "./ComingSoon";
import Schedule from "./Schedule";

import styles from "./Schedule.module.scss";
import ScheduleTab from "./ScheduleTab";

const ScheduleContainer = () => {
  const [comingSoon] = useState(false);

  return (
    <div className={styles.component}>
      <Center>
        <Text className={styles.title}>Schedule</Text>
      </Center>
      <Center>{comingSoon ? <ComingSoon /> : <ScheduleTab virtual={false} />}</Center>
    </div>
  );
};

export default ScheduleContainer;
