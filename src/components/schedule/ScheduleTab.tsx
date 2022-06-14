import React from "react";

import Schedule from "./Schedule";

type Props = {
  virtual: boolean;
};

const ScheduleTab: React.FC<Props> = (props: Props) => (
  <div>
    <Schedule tableLength={Infinity} homepage={false} virtual={props.virtual} />
  </div>
);
export default ScheduleTab;
