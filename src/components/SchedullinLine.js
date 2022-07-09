import React, { Component, useState } from "react";
import moment from "moment";

import Timeline, {
  TimelineHeaders,
  SidebarHeader,
  DateHeader,
} from "react-calendar-timeline/lib";

export const SchedullingLine = (props) => {
  console.log(props);
  return (
    <div>
      Rendered by SchedullingLine!
      {/* {props ? 
        <Timeline
          items={props}
          defaultTimeStart={moment().add(-12, "hour")}
          defaultTimeEnd={moment().add(12, "hour")}
        />
       : null} */}
    </div>
  );
};
