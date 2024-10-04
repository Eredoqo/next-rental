import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import TimerIcon from "@mui/icons-material/Timer";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const serviceData = [
  {
    id: 1,
    title: "Rent at the Airport",
    icon: <FlightTakeoffIcon />,
    desc: "We offer convenient car rental at the airport. Pick up your car as soon as you land.",
  },
  {
    id: 2,
    title: "Unlimited Miles Car Rental",
    icon: <DirectionsCarFilledIcon />,
    desc: "Rent a car with us and enjoy unlimited mileage. Drive as much as you want without any extra charges.",
  },
  {
    id: 3,
    title: "Fast & Easy Booking",
    icon: <TimerIcon />,
    desc: "Our booking process is fast and easy. Book a car in just a few clicks.",
  },
  {
    id: 4,
    title: "Service Point 24/7",
    icon: <ContactSupportIcon />,
    desc: "Our service points are open 24/7. We're always here to help you.",
  },
];

export default serviceData;
