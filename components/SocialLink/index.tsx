import { Social } from "@/types/social";
import { SocialIcon } from "./SocialIcon";

interface Props {
  social: Social;
}

const SocialLink = ({social} : Props) => {
  const href = social.type === "email" ? `mailto:${social.link}` : social.link;
  return (
    <a
      key={social.type}
      href={href}
      target={social.type === "email" ? undefined : "_blank"}
      rel={social.type === "email" ? undefined : "noopener noreferrer"}
      className="group/btn inline-flex items-center gap-2.5 font-medium text-gray-300 dark:text-manatee transition-all duration-300 "
    >
      <SocialIcon type={social.type} />
    </a>
  )
}

export default SocialLink