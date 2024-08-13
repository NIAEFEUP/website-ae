import Image from "next/image";

import { Linkedin } from "lucide-react";

const socials = [
  {
    plataform: "facebook",
    link: "https://www.facebook.com/joaopereira",
  },
  {
    plataform: "instagram",
    link: "https://www.instagram.com/joaopereira",
  },
];

const Avatar = () => {
  return (
    <div className="animate_top group relative rounded-lg border border-stroke bg-white p-5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <Image
        src="/images/avatar.jpg"
        alt="Avatar"
        width={80}
        height={80}
        className="w-20 h-20 object-cover mx-auto rounded-full"
      />
      <h6 className="text-para2 font-medium text-black dark:text-white text-center">
        João Pereira
      </h6>
      <div className="flex justify-center gap-2.5">
        {socials.map((social) => (
          <a
            key={social.plataform}
            href={social.link}
            target="
                _blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2.5 font-medium text-gray-400 dark:text-manatee transition-all duration-300 hover:text-primary dark:hover:text-primary"
          >
            <Linkedin className="h-5" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Avatar;
