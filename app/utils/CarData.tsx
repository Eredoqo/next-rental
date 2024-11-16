import img01 from "./../images/cars-img/nissan-offer.png";
import img02 from "./../images/cars-img/offer-toyota.png";
import img03 from "./../images/cars-img/bmw-offer.png";
import img04 from "./../images/cars-img/nissan-offer.png";
import img05 from "./../images/cars-img/offer-toyota.png";
import img06 from "./../images/cars-img/mercedes-offer.png";
import img07 from "./../images/cars-img/toyota-offer-2.png";

import { StaticImageData } from 'next/image';

type CarItemProps = {"id": number, "carName": string, "imgUrl": StaticImageData};

const carData: CarItemProps[] = [
  {
    id: 1,
    carName: "Ford Mustang",
    imgUrl: img01,
  },
  {
    id: 2,
    carName: "Chevrolet Camaro",
    imgUrl: img02,
  },
  {
    id: 3,
    carName: "Volkswagen Golf",
    imgUrl: img03,
  },
  {
    id: 4,
    carName: "Audi A4",
    imgUrl: img04,
  },
  {
    id: 5,
    carName: "BMW 3 Series",
    imgUrl: img05,
  },
  {
    id: 6,
    carName: "Toyota Corolla",
    imgUrl: img06,
  },
  {
    id: 7,
    carName: "Skoda Octavia Wagon",
    imgUrl: img07,
  },
  {
    id: 8,
    carName: "Nissan Altima",
    imgUrl: img01,
  },
  {
    id: 9,
    carName: "Hyundai Elantra",
    imgUrl: img02,
  },
  {
    id: 10,
    carName: "Kia Sorento",
    imgUrl: img03,
  },
  {
    id: 11,
    carName: "Subaru Forester",
    imgUrl: img04,
  },
  {
    id: 12,
    carName: "Honda Civic",
    imgUrl: img05,
  },
  {
    id: 13,
    carName: "Mercedes-Benz C-Class",
    imgUrl: img06,
  },
];

export default carData;