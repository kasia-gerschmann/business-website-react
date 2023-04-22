import img1 from "./specialist1.jpg";
import img2 from "./specialist2.jpg";

interface Service {
  name: string;
  isNew?: boolean;
}

export const SERVICES: Service[] = [
  {
    name: "Audyt",
    isNew: true,
  },
  {
    name: "Doradztwo podatkowe",
  },
  {
    name: "Consulting",
  },
  {
    name: "Księgowość",
  },
  {
    name: "Raportowanie finansowe",
  },
  {
    name: "Wsparcie techniczne systemów ERP",
  },
];

interface Specialist {
  name: string;
  department: string;
  description: string;
  image: string;
}

export const SPECIALISTS: Specialist[] = [
  {
    name: "Aleksandra Nowak",
    department: "Dział Badania Płynności Finansowej",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad alias architecto asperiores assumenda atque autem cumque deleniti, dolore doloribus eius eos esse eveniet illum, ipsa ipsam iste iure magnam magni minus nisi, non officia optio porro provident quis ratione recusandae repellat reprehenderit rerum sapiente sit sunt temporibus ut vel!",
    image: img1,
  },
  {
    name: "Piotr Kowalski",
    department: "Dział Raportowania Finansowego",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad alias architecto asperiores assumenda atque autem cumque deleniti, dolore doloribus eius eos esse eveniet illum, ipsa ipsam iste iure magnam magni minus nisi, non officia optio porro provident quis ratione recusandae repellat reprehenderit rerum sapiente sit sunt temporibus ut vel!",
    image: img2,
  },
];
