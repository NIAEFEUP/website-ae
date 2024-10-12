import { Linkedin, Globe, Instagram, Facebook } from "lucide-react";
import { JSX } from "react";

export const getSociaIcon = (socialName: string): JSX.Element => {
    switch (socialName) {
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
};
