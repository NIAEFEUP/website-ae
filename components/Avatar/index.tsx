import Image from "next/image";
import { ExternalLink, Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Media, Person, Position } from "@/payload-types";
import DefaultAvatarImage from "@/public/images/default_avatar.jpg";

interface Props {
  person: Person;
}

const symbols = {
  "linkedin": <Linkedin className="h-5" />,
  "instagram": <Instagram className="h-5" />,
  "email": <Mail className="h-5" />,
  "facebook": <Facebook className="h-5" />,
  "website": <ExternalLink className="h-5" />
}

const Avatar = ({ person }: Props) => {

  if (!person) return null;
  const photo = person.photo as Media;

  return (
    <div className="animate_top group min-h-72 w-50 flex flex-col justify-around rounded-lg border border-stroke bg-primary p-5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none hover:shadow-solid-4 dark:hover:bg-hoverdark">
      <div>
        <Image
          src={photo?.url ?? DefaultAvatarImage.src}
          alt={photo?.alt ?? ""}
          width={80}
          height={80}
          className="w-20 h-20 object-cover mx-auto rounded-full"
        />
        <div className="mt-3">
          <h6 className="text-2xl font-medium text-white dark:text-white text-center">
            {person.name}
          </h6>
        </div>
      </div>
      <div className="">
        {person.position && <p className="text-sm text-gray-300 dark:text-gray-400 text-center mt-1">
          {(person.position as Position).name}
        </p>}
        <div className="flex justify-center gap-2.5 mt-2">
          {person.socials?.map((social) => (
            <a
              key={social.type}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2.5 font-medium text-gray-300 dark:text-manatee transition-all duration-300 hover:text-white dark:hover:text-primary"
            >
              {symbols[social.type]}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Avatar;
