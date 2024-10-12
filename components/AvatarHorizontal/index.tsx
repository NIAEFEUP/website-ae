import { Media, Person } from "@/payload-types";
import Image from "next/image";

import DefaultAvatarImage from "@/public/images/default_avatar.jpg";

interface Props {
  person: Person,
  description: string,
  className?: string
}

const AvatarHorizontal = ({ person, description, className }: Props) => {

  const photo = person.photo as Media;

  return (
    <div className={`animate_top group relative rounded-lg border border-stroke bg-white p-5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none flex gap-3 ${className}`}>
      {/* Image */}
      {photo && (
        <Image
          src={photo.url ?? DefaultAvatarImage.src}
          alt={photo.alt}
          width={80}
          height={80}
          className="w-20 h-20 object-cover mx-auto rounded-full"
        />
      )}
      <div className="flex flex-col justify-center">
        <h6 className="text-para2 font-medium text-black dark:text-white">
          {person.name}
        </h6>
        <p className="text-black opacity-40 dark:text-manatee">
          {description}
        </p>
        {/* Socials */}
        <div className="flex justify-center gap-2.5">
          {person.socials?.map((social) => (
            <a
              key={social.type}
              href={social.link}
              target="
                  _blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
            ></a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvatarHorizontal;
