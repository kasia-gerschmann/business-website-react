import img1 from "./specialist1.jpg";
import img2 from "./specialist2.jpg";

interface Specialist {
  name: string;
  department: string;
  description: string;
  image: string;
}

export const SPECIALISTS: Specialist[] = [
  {
    name: "Aleksandra Kowalski",
    department: "Financial Liquidity Research Department",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad alias architecto asperiores assumenda atque autem cumque deleniti, dolore doloribus eius eos esse eveniet illum, ipsa ipsam iste iure magnam magni minus nisi, non officia optio porro provident quis ratione recusandae repellat reprehenderit rerum sapiente sit sunt temporibus ut vel!",
    image: img1,
  },
  {
    name: "George Hewitt",
    department: "Financial Reporting Department",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad alias architecto asperiores assumenda atque autem cumque deleniti, dolore doloribus eius eos esse eveniet illum, ipsa ipsam iste iure magnam magni minus nisi, non officia optio porro provident quis ratione recusandae repellat reprehenderit rerum sapiente sit sunt temporibus ut vel!",
    image: img2,
  },
];
