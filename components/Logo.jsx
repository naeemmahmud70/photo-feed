import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="font-poppins font-bold text-3xl">
        Natural <br />
        Photo Feed
      </h1>
    </Link>
  );
};

export default Logo;
