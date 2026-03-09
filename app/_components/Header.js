import { HiMiniBars3 } from "react-icons/hi2";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ContactButton from "./ContactButton";
function Header() {
  return (
    <header className="flex justify-between px-15 py-5 items-center bg-white">
      <Logo />
      <Navigation />
      <ContactButton />
      <div className="text-4xl md:hidden cursor-pointer text-primary">
        <HiMiniBars3 />
      </div>
    </header>
  );
}

export default Header;
