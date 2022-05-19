import { Text } from "@chakra-ui/react";
import { useState } from "react";

import styles from "./Schedule.module.scss";

import events from "./ScheduleEvents.json";

const ScheduleTable = () => {
  const [eventDays] = useState([4, 5, 6]);

  // as a note the json days go from 0 - 6, so 0 means Monday, 6, means Sunday
  const getSpecificDayEvents = (day: number) => {
    return 0;
  };

  return (
    <div className={styles.schedule}>
      <Text>Where the schedule should be</Text>
    </div>
  );
};

export default ScheduleTable;
