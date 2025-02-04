import Image from "next/image";
import { Media, Person, Position } from "@/payload-types";
import DefaultAvatarImage from "@/public/images/default_avatar.jpg";
import SocialLink from "../SocialLink";

interface Props {
  person: Person;
}

const Avatar = ({ person }: Props) => {

  if (!person) return null;
  const photo = person.photo as Media;

  return (
    <div className="animate_top group w-50 flex flex-col justify-between rounded-lg border border-stroke bg-white p-5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none hover:shadow-solid-4 dark:hover:bg-hoverdark">
      <div>
        <Image
          src={photo?.url ?? DefaultAvatarImage.src}
          alt={photo?.alt ?? ""}
          width={80}
          height={80}
          className="w-20 h-20 object-cover mx-auto rounded-full"
        />
        <h6 className="text-para2 font-medium text-black dark:text-white text-center">
          {person.name}
        </h6>
        {person.position && <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-1">
          {(person.position as Position).name}
        </p>}
      </div>
      <div className="flex justify-center gap-2.5 mt-2">
        {person.socials?.map((social) => (
          <SocialLink key={social.type} social={social} />  
        ))}
      </div>
    </div>
  );
};

export default Avatar;
