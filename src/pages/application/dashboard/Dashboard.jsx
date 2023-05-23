import React from "react";
import AttendanceOverview from "./components/AttendanceOverview";
import Card from "./components/Card";
import DetectedViolations from "./components/DetectedViolations";
import HumanPresent from "./components/HumanPresent";
import LastEventDetected from "./components/LastEventDetected";
import LateOverview from "./components/LateOverview";
import WorkersPerformance from "./components/WorkersPerformance";
import "../style/dashboard.css";
import getEventsByDay from "../../../api/getEventsByDay";
import getEventsByMonth from "../../../api/getEventsByMonth";
import { useState } from "react";
import { useEffect } from "react";
import jsonText from "../../../assets/text.json";

export default function MainContent() {
  const [eventTypesCount, setEventTypesCount] = useState();
  const [events, setEvents] = useState();

  const fetchDataDay = async () => {
    const res = await getEventsByDay();

    console.log(res);

    setEvents(res.data);
  };

  const fetchDataMonth = async () => {
    const res = await getEventsByMonth();

    console.log(res);
    setEventTypesCount(res.types);
  };

  useEffect(() => {
    fetchDataDay();
    fetchDataMonth();
  }, []);

  const eventDetails = (type, time, cam) => {
    type === "ppe" && (type = jsonText.ppe);
    time = time.slice(11, 19);

    return jsonText.voilationDetails
      .replace("__vioName__", type)
      .replace("__vioTime__", time)
      .replace("__vioCam__", cam || 1);
  };

  const text = events?.map((event) =>
    eventDetails(event.type, event.arriveAt, event.info.cam)
  );

  return (
    <div className="dashboard_nomain">
      <div className="detected_violaions">
        <DetectedViolations />
      </div>

      <div className="attendance_overview">
        <AttendanceOverview />
      </div>
      <div className="human_present">
        {/* <HumanPresent 
      text="Updated every 5 minutes"/> */}
      </div>
      <div className="late_overview">
        <LateOverview />
      </div>
      <div className="work_performane">
        <WorkersPerformance />
      </div>
      <div className="card">
        <div className="last_event">
          <LastEventDetected text={text} />
        </div>

        <div className="detected_vehicles">
          <Card header="Fight" detectedNum={eventTypesCount?.fight || 0} />
        </div>
        <div className="unauthtorized_personal">
          <Card
            header="Personal Protective Equipment"
            detectedNum={eventTypesCount?.ppe || 0}
          />
        </div>
      </div>
    </div>
  );
}
