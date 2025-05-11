import Link from "next/link";

const RedirectSign = ({ children, href }) => {
  return (
    <p className="text-center">
      {children}{" "}
      <Link
        className="underline text-blue-600"
        href={`/${href?.toString().toLowerCase()}`}
      >
        {href}
      </Link>
    </p>
  );
};

export default RedirectSign;
