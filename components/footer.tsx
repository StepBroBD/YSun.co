import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandTwitter,
    IconBrandYoutube,
    IconCreativeCommons,
    IconCreativeCommonsBy,
    IconCreativeCommonsNc,
    IconMail,
} from "@tabler/icons-react";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="flex flex-col items-center sm:items-start space-y-8">
            <small className="h-5">
                &copy; {new Date().getFullYear()} Yifei Sun. Some rights
                reserved.
            </small>

            <div className="flex flex-row space-x-3 items-center justify-center h-5">
                <a
                    href="mailto:hi@ysun.co"
                    target="_blank"
                    className="inline-block"
                    aria-label="Mail"
                >
                    <IconMail size={20} />
                </a>
                <a
                    href="https://github.com/stepbrobd/stepbrobd.com"
                    target="_blank"
                    className="inline-block"
                    aria-label="GitHub"
                >
                    <IconBrandGithub size={20} />
                </a>
                <a
                    href="https://twitter.com/stepbrobd"
                    target="_blank"
                    className="inline-block"
                    aria-label="Twitter"
                >
                    <IconBrandTwitter size={20} />
                </a>
                <a
                    href="https://instagram.com/stepbrobd"
                    target="_blank"
                    className="inline-block"
                    aria-label="Instagram"
                >
                    <IconBrandInstagram size={20} />
                </a>
                <a
                    href="https://www.youtube.com/@stepbrobd"
                    target="_blank"
                    className="inline-block"
                    aria-label="YouTube"
                >
                    <IconBrandYoutube size={20} />
                </a>
            </div>

            <a
                className="flex items-center justify-center h-5"
                href="https://creativecommons.org/licenses/by-nc/4.0/"
                rel="noopener noreferrer"
                target="_blank"
            >
                <div className="flex flex-row space-x-3">
                    <IconCreativeCommons size={20} />
                    <IconCreativeCommonsBy size={20} />
                    <IconCreativeCommonsNc size={20} />
                </div>
            </a>
        </div>
    );
};

export default Footer;
