import img01 from "./../images/cars-img/nissan-offer.png";
import img02 from "./../images/cars-img/offer-toyota.png";
import img03 from "./../images/cars-img/bmw-offer.png";
import img04 from "./../images/cars-img/nissan-offer.png";
import img05 from "./../images/cars-img/offer-toyota.png";
import img06 from "./../images/cars-img/mercedes-offer.png";
import img07 from "./../images/cars-img/toyota-offer-2.png";
import { CarItem } from "../@types/CarTypes";

const carData: CarItem[] = [
  {
    id: 1,
    brand: "Volkswagen",
    rating: 112,
    carName: "Ford Mustang",
    imgUrl: img01,
    model: "2022",
    price: 35,
    speed: "150km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Volkswagen Golf VI is a compact car that offers a smooth and comfortable ride. It's equipped with a powerful engine that allows it to reach a top speed of 150km/h. The car comes with GPS Navigation and heated seats for added comfort. The automatic transmission makes it easy to drive, even for beginners. The Golf VI is a reliable and economical choice for both city driving and long-distance journeys.",
  },
  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Chevrolet Camaro",
    imgUrl: img02,
    model: "Model-2022",
    price: 25,
    speed: "200km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Toyota Corolla is a classic compact car known for its reliability and fuel efficiency. It's equipped with GPS Navigation and heated seats for added comfort. The automatic transmission and top speed of 200km/h make it a great choice for both city and highway driving.",
  },
  {
    id: 3,
    brand: "Volkswagen",
    rating: 132,
    carName: "Volkswagen Golf V",
    imgUrl: img03,
    model: "Model-2022",
    price: 35,
    speed: "20km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Volkswagen Golf V is a versatile compact car with a powerful engine. It's equipped with GPS Navigation and heated seats for added comfort. The automatic transmission and top speed of 20km/h make it suitable for city driving.",
  },
  {
    id: 4,
    brand: "Ford",
    rating: 102,
    carName: "Ford Fiesta",
    imgUrl: img04,
    model: "Model-2022",
    price: 20,
    speed: "170km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Ford Fiesta is a compact car that's fun to drive. It offers a smooth ride and a comfortable interior. It's equipped with GPS Navigation and heated seats for added comfort. The automatic transmission and top speed of 170km/h make it a great choice for both city and highway driving.",
  },
  {
    id: 5,
    brand: "Toyota",
    rating: 94,
    carName: "Toyota Rav4",
    imgUrl: img05,
    model: "Model-2022",
    price: 55,
    speed: "200km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Toyota Rav4 is a compact SUV that offers a comfortable ride and a spacious interior. It's equipped with GPS Navigation and heated seats for added comfort. The automatic transmission and top speed of 200km/h make it a great choice for both city and highway driving.",
  },
  {
    id: 6,
    brand: "Toyota",
    rating: 119,
    carName: "Toyota Corolla",
    imgUrl: img06,
    model: "Model-2022",
    price: 25,
    speed: "150km/hl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Toyota Corolla is a classic compact car known for its reliability and fuel efficiency. It's equipped with GPS Navigation and heated seats for added comfort. The automatic transmission and top speed of 150km/h make it a great choice for both city and highway driving.",
  },
  {
    id: 7,
    brand: "Skoda",
    rating: 82,
    carName: "Skoda Octavia Wagon",
    imgUrl: img07,
    model: "Model 3",
    price: 45,
    speed: "200km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Skoda Octavia Wagon is a spacious and comfortable wagon. It's equipped with GPS Navigation and heated seats for added comfort. The automatic transmission and top speed of 200km/h make it a great choice for both city and highway driving.",
  },
  {
    id: 8,
    brand: "Nissan",
    rating: 90,
    carName: "Nissan Altima",
    imgUrl: img01,
    model: "Model-2022",
    price: 30,
    speed: "180km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Nissan Altima is a reliable and fuel-efficient car, perfect for city driving. It's equipped with GPS Navigation and heated seats for added comfort. The automatic transmission and top speed of 180km/h make it a great choice for both city and highway driving.",
  },
  {
    id: 9,
    brand: "Hyundai",
    rating: 85,
    carName: "Hyundai Elantra",
    imgUrl: img02,
    model: "Model-2022",
    price: 28,
    speed: "160km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Hyundai Elantra is a reliable and fuel-efficient car, perfect for city driving. It's equipped with GPS Navigation and heated seats for added comfort. The automatic transmission and top speed of 160km/h make it a great choice for both city and highway driving.",
  },
  {
    id: 10,
    brand: "Kia",
    rating: 88,
    carName: "Kia Sorento",
    imgUrl: img03,
    model: "Model-2022",
    price: 32,
    speed: "170km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Kia Sorento is a reliable and fuel-efficient car, perfect for city driving. It's equipped with GPS Navigation and heated seats for added comfort. The automatic transmission and top speed of 170km/h make it a great choice for both city and highway driving.",
  },
  {
    id: 11,
    brand: "Subaru",
    rating: 92,
    carName: "Subaru Forester",
    imgUrl: img04,
    model: "Model-2022",
    price: 34,
    speed: "190km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Subaru Forester is a reliable and fuel-efficient car, perfect for city driving. It's equipped with GPS Navigation and heated seats for added comfort. The automatic transmission and top speed of 190km/h make it a great choice for both city and highway driving.",
  },
  {
    id: 12,
    brand: "Volkswagen",
    rating: 95,
    carName: "Volkswagen Golf",
    imgUrl: img05,
    model: "Model-2022",
    price: 36,
    speed: "200km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Volkswagen Golf is a reliable and fuel-efficient car, perfect for city driving. It's equipped with GPS Navigation and heated seats for added comfort. The automatic transmission and top speed of 200km/h make it a great choice for both city and highway driving.",
  },
  {
    id: 13,
    brand: "Mercedes-Benz",
    rating: 98,
    carName: "Mercedes-Benz C-Class",
    imgUrl: img06,
    model: "Model-2022",
    price: 40,
    speed: "210km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Mercedes-Benz C-Class is a reliable and fuel-efficient car, perfect for city driving. It's equipped with GPS Navigation and heated seats for added comfort. The automatic transmission and top speed of 210km/h make it a great choice for both city and highway driving.",
  },
];

export default carData;