import Image from "next/image";

const socials = [
  {
    plataform: "facebook",
    link: "https://www.facebook.com/joaopereira",
  },
  {
    plataform: "instagram",
    link: "https://www.instagram.com/joaopereira",
  },
  {
    plataform: "twitter",
    link: "https://www.twitter.com/joaopereira",
  },
];

const AvatarHorizontal = () => {
  return (
    <div className="animate_top group relative rounded-lg border border-stroke bg-white p-5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none flex gap-3">
      {/* Image */}
      <Image
        src="/images/avatar.jpg"
        alt="Avatar"
        width={80}
        height={80}
        className="w-20 h-20 object-cover mx-auto rounded-full"
      />
      <div className="flex flex-col justify-center">
        <h6 className="text-para2 font-medium text-black dark:text-white">
          João Pereira
        </h6>
        <p className="text-black opacity-40 dark:text-manatee">Treinador</p>
        {/* Socials */}
        <div className="flex justify-center gap-2.5">
          {socials.map((social) => (
            <a
              key={social.plataform}
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
