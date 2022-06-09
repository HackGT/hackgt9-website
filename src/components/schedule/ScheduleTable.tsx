import { Center, Text, VStack } from "@chakra-ui/react";
import dateFormat from "dateformat";
import { useEffect, useState } from "react";
import EventRow from "./EventRow";

import styles from "./Schedule.module.scss";

import events from "./ScheduleEvents.json";
import { fetchAllEvents, fetchUpcomingEvents } from "../../services/cmsService";

const ScheduleTable = () => {
  const [event, setEvents] = useState<any[]>([]);

  const getDayFromDate = (date: string) => dateFormat(date, "dddd, mmm dS");

  // to do, parse the times and days from the cms data

  useEffect(() => {
    const getEvents = async () => {
      let data;
      let startIndex = 0;
      const elements = [];

      data = await fetchAllEvents(false);
      const sortedData = data.allEvents.sort((a: any, b: any) => {
        const dateA = a.startDate;
        const dateB = b.startDate;
        return dateA >= dateB ? 1 : -1;
      });
      for (let i = 0; i < sortedData.length - 1; i++) {
        if (
          getDayFromDate(sortedData[i].startDate) !== getDayFromDate(sortedData[i + 1].startDate)
        ) {
          elements.push(sortedData.slice(startIndex, i + 1));
          startIndex = i + 1;
        }
      }
      elements.push(sortedData.slice(startIndex, data.length));
      setEvents([...elements]);
    };
    getEvents();
  }, []);

  const genDayTable = (day: string) => {
    // filter the events by the given day and map them.
    return events.events
      .filter((e) => e.day == day)
      .map((event: any) => (
        <EventRow
          key={event}
          name={event.name}
          startTime={event.startTime}
          endTime={event.endTime}
        />
      ));
  };

  return (
    <div className={styles.schedule}>
      {eventDays.map((day) => (
        <div key={day}>
          <Center>
            <Text className={styles.dayHeader}>{day}</Text>
          </Center>
          <Center>
            <VStack>{genDayTable(day)}</VStack>
          </Center>
        </div>
      ))}
    </div>
  );
};

export default ScheduleTable;
