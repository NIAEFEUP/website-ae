import { Association, Media } from "@/payload-types";
import Image from "next/image";
import SocialLink from "@/components/SocialLink";

interface Props {
  association: Association;
}

export const AssociationCard = ({ association } : Props) => {
    const logo = association.logo as Media;
    return (
        <div className="flex flex-col justify-center w-fit">
            <Image
                src={logo?.url ?? ""}
                alt={logo?.alt ?? ""}
                width={80}
                height={80}
                className="w-20 h-20 object-cover mx-auto"
            />

            <h2 className="text-center text-lg font-semibold mt-1">{association.name}</h2>
            <h3 className="text-center text-md mt-1 w-50">{association.description}</h3>
            <ul className="flex gap-1 mt-1 justify-center">
                {association.socials?.map((social) => {
                    return <SocialLink social={social} />
                })}
            </ul>
        </div>
    );
}