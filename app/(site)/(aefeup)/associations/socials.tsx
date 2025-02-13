import { Linkedin, Globe, Instagram, Facebook } from "lucide-react";

interface Props {
    type: string
}

export const SocialIcon = ({ type }: Props) => {
    switch (type) {
        case "linkedin":
            return <Linkedin className="h-6" />;
        case "facebook":
            return <Facebook className="h-6" />;
        case "website":
            return <Globe className="h-6" />;
        case "instagram":
            return <Instagram className="h-6" />;
        default:
            return <></>
    }
}