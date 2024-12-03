import { Feature } from "@/types/feature";
import { Car, Earth, Users } from "lucide-react";

const motorsportFeaturesData: Feature[] = [
  {
    id: 1,
    icon: <Car />,
    title: "Offer",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",

  },
  {
    id: 2,
    icon: <Users />,
    title: "Teams",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
  {
    id: 3,
    icon: <Earth />,
    title: "Goal",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  }
];

export default motorsportFeaturesData;
