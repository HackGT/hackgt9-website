import { Center } from "@chakra-ui/react";
import { useState } from "react";
import ComingSoon from "./ComingSoon";
import ScheduleTable from "./ScheduleTable";

const Schedule = () => {
  const [comingSoon] = useState(false);

  return <Center>{comingSoon ? <ComingSoon /> : <ScheduleTable />}</Center>;
};

export default Schedule;
