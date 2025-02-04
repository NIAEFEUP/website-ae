
import { Social } from "@/types/social";
import { SocialIcon } from "./SocialIcon";

interface Props {
  social: Social;
}

const SocialLink = ({social} : Props) => {
  return (
    <a
      key={social.type}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group/btn inline-flex items-center gap-2.5 font-medium text-gray-400 dark:text-manatee transition-all duration-300 hover:text-primary dark:hover:text-primary"
    >
      <SocialIcon type={social.type} />
    </a>
  )
}

export default SocialLink