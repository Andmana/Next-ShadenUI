import Image from "next/image";

export const LogoIpsum = ({ isWhhite = false }) => {
    return (
        <Image
            src={isWhhite ? "/logo-ipsum-white.svg" : "/logo-ipsum.svg"}
            alt="Logo"
            width={134}
            height={134}
            style={{ width: 134, height: "auto" }}
            className="relative mx-auto"
            priority
        />
    );
};
