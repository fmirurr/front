import React from "react";
import Timeline from "react-calendar-timeline/lib";
import moment from "moment";

export const SchedullingLine = (props) => {
  const driver_ids = [{driver_id:1, name:"Diego"}]
  console.log("shecdulling", props);
  
  return (
    <div>
      Rendered by SchedullingLine!
        <Timeline
          groups={driver_ids}
          items={props}
          defaultTimeStart={moment().add(-12, "hour")}
          defaultTimeEnd={moment().add(12, "hour")}
        />
    </div>
  );
};
