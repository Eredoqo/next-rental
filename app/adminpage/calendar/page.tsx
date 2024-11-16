"use client";

import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

import { Box, Divider, Stack } from "@mui/material";
import { LayoutWrapper } from "@/app/components/admin-component/admin-sidebar";
// import { useGetRentals } from "@/hooks/useGetRental";

interface EventInput {
  title: string;
  start: string;
  end: string;
  backgroundColor?: string;
}

const CalendarBooked: React.FC = () => {
//   const { rentals } = useGetRentals();
  const calendarComponentRef = useRef<FullCalendar>(null);

  const initialEvents = ""
    // rentals?.map((rental, index) => ({
    //   title: `Rental ID: ${rental.id}`,
    //   start: new Date(rental.startDate).toISOString(),
    //   end: new Date(rental.endDate).toISOString(),
    //   backgroundColor: index % 2 === 0 ? "blue" : "green",
    // })) || [];

  const [events, setEvents] = useState<EventInput[]>(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : initialEvents;
  });

//   useEffect(() => {
//     if (rentals && !localStorage.getItem("events")) {
//       const newEvents = rentals.map((rental) => ({
//         title: `Rental ID: ${rental.id}`,
//         start: new Date(rental.startDate).toISOString(),
//         end: new Date(rental.endDate).toISOString(),
//       }));
//       setEvents(newEvents);
//     }
//   }, [rentals]);

  const handleSelectedDates = (info: { startStr: string; endStr: string }) => {
    const title = prompt("Add a reservation");
    if (title != null) {
      const newEvent: EventInput = {
        title,
        start: info.startStr,
        end: info.endStr,
        backgroundColor: events.length % 2 === 0 ? "blue" : "green",
      };
      setEvents((prevEvents) => {
        const updatedEvents = [...prevEvents, newEvent];
        localStorage.setItem("events", JSON.stringify(updatedEvents));
        alert(`Event '${title}' added on ${info.startStr}`);
        return updatedEvents;
      });
    }
  };

  const handleEventClick = (info: { event: { id: string; title: string } }) => {
    const shouldDelete = window.confirm(`Delete event '${info.event.title}'?`);
    if (shouldDelete) {
      setEvents((prevEvents) => {
        const updatedEvents = prevEvents.filter(
          (event) => event.title !== info.event.title
        );
        localStorage.setItem("events", JSON.stringify(updatedEvents));
        return updatedEvents;
      });
    }
  };
  return (
    <LayoutWrapper>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Calendar to see and add bookings
      </h1>
      <Divider />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 3,
          padding: "10px 20px",
        }}
      >
        <Stack paddingTop="30px" minWidth="1200px" minHeight="600px">
          <FullCalendar
            ref={calendarComponentRef}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            selectable={true}
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            eventClick={handleEventClick}
            events={events}
            select={handleSelectedDates}
            views={{
              dayGridMonth: {
                eventLimit: 3,
              },
              timeGridWeek: {
                eventLimit: 3,
              },
              timeGridDay: {
                eventLimit: 3,
              },
            }}
          />
        </Stack>
      </Box>
    </LayoutWrapper>
  );
};

export default CalendarBooked;