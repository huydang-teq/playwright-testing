import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center bg-orange-300 h-40 gap-8">
      <Link href={"/"}>
        <h1 className="uppercase text-4xl text-blue-600">Header</h1>
      </Link>
      <Link href={"/about"}>
        <p className="text-black-500 text-xl">ABOUT</p>
      </Link>
    </header>
  );
};

export default Header;
