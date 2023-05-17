import { useTranslation } from "react-i18next";

interface Service {
  name: string;
  isNew?: boolean;
}

export const SERVICES: Service[] = [

  {
    name: "audit",
    isNew: true
  },
  {
    name: "tax"
  },
  {
    name: "consulting"
  },
  {
    name: "accounting"
  },
  {
    name: "reporting"
  },
  {
    name: "erp"
  }
];