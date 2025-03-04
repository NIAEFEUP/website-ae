
import { Media, Person } from "@/payload-types";
import Image from "next/image";

import DefaultAvatarImage from "@/public/images/default_avatar.jpg";

interface Props {
  person: Person,
  description: string,
  className?: string
}

const PresidentCard = ({ person, description, className }: Props) => {

  if (!person) return null;
  const photo = person.photo as Media;

  return (
    <div className={`animate_top group relative rounded-lg border border-stroke bg-white p-5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none flex flex-col justify-center items-center gap-3 select-none ${className}`}>
      {/* Image */}
      {photo && (
        <Image
          src={photo.url ?? DefaultAvatarImage.src}
          alt={photo.alt}
          width={200}
          height={200}
          className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 object-cover mx-auto rounded-full"
          priority
        />
      )}
      <div className="flex flex-col justify-center items-center">
        <h6 className="text-2xl font-medium text-black dark:text-white">
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

export default PresidentCard;
