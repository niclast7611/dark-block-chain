import Image from "next/image";
import CutCornerButton from "../components/CutCornerButton";

const Header = () => {
  return (
    <div className="sticky top-0 bg-zinc-900/50 backdrop-blur-lg z-40">
      <div className="container">
        <div className="flex justify-between items-center h-24">
          <div>
            <Image
              src="/assets/images/logo.svg"
              alt="Blockforge"
              width={200}
              height={50}
            />
          </div>
          <div className="flex gap-4 items-center">
            <CutCornerButton className="hidden md:inline-flex">
              Get Started
            </CutCornerButton>
            <div className="size-10 relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1"></div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 translate-y-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
