import img01 from "./../images/blog-img/Berat.jpg";
import img02 from "./../images/blog-img/Gjirokastet.jpg";
import img03 from "./../images/blog-img/Saranda.jpg";
import { Blog } from "../@types/BlogTypes";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Exploring the Beauty of Berat",
    imgUrl: img01,
    description:
      "Berat, known as the 'City of a Thousand Windows,' is a UNESCO World Heritage Site with its stunning Ottoman architecture and historical significance. The city boasts a unique blend of old and new, with cobbled streets, ancient castles, and beautiful mosques and churches. Explore the Berat Castle for panoramic views, visit the Ethnographic Museum to understand local culture, and stroll along the charming streets of the Mangalem and Gorica quarters. Berat's rich history and picturesque scenery make it a must-visit destination in Albania.",
    quote:
      "Berat is not just a city; it’s a journey back in time with its rich history and breathtaking views.",
    slug: "exploring-the-beauty-of-berat",
  },
  {
    id: 2,
    title: "Discovering the Charm of Gjirokastër",
    imgUrl: img02,
    description:
      "Gjirokastër, another UNESCO World Heritage Site, is renowned for its well-preserved Ottoman architecture and stunning natural surroundings. The city is famous for its imposing fortress, which offers panoramic views of the Drino Valley. Wander through the old bazaar, explore traditional houses with their characteristic stone facades, and visit the Ethnographic Museum housed in the former home of the Albanian dictator Enver Hoxha. Gjirokastër’s rich cultural heritage and historical significance make it a captivating destination.",
    quote:
      "Gjirokastër’s timeless charm and historical allure offer a unique glimpse into Albania’s past.",
    slug: "discovering-the-charm-of-gjirokaster",
  },
  {
    id: 3,
    title: "The Scenic Beauty of Saranda",
    imgUrl: img03,
    description:
      "Saranda is a picturesque coastal town located on the Ionian Sea, known for its stunning beaches and vibrant nightlife. The town offers crystal-clear waters, beautiful beaches like Ksamil and Mirror Beach, and a charming promenade lined with cafes and restaurants. Saranda is also a gateway to the nearby UNESCO World Heritage site of Butrint, an ancient city with well-preserved ruins. Whether you’re looking to relax on the beach, explore ancient history, or enjoy a lively evening out, Saranda has something for everyone.",
    quote:
      "Saranda’s blend of beautiful beaches and rich history makes it a perfect destination for relaxation and exploration.",
    slug: "the-scenic-beauty-of-saranda",
  },
];

export default blogData;
