import { RobotoMono } from "@/utils/fonts";
import { MenuItems } from "@/utils/localData";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="h-screen flex justify-center">
      <div className="w-9/12 h-[90%] rounded-xl bg-[#99C883] self-center shadow-2xl shadow-black flex flex-initial flex-col items-center" >
        <div className="bg-white w-[379px] h-[119px] rounded-[20px] flex flex-row justify-center space-x-4 shadow-lg shadow-black my-12 " >
          <div className="flex h-[70] self-center">
            <Image
              src="/g-logo.png"
              alt="enterprise logo"
              width={93}
              height={93}
            />
          </div>

          <div className="flex self-center text-4xl flex-col" >
            <span className={RobotoMono.className}>
              SUPER G
            </span>
            <span className={RobotoMono.className}>
              CENTRO
            </span>
          </div>
        </div>
        <div className="h-2/4 w-11/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  " >
          {
            MenuItems.map(({ name, image, alt, bgColor, link }) => (
              <Link href={link}
                className={`w-[170px] h-[140px] rounded-2xl flex flex-col items-center shadow-lg shadow-black hover:shadow-none delay-100 hover:border-solid hover:border-[6px] hover:border-white `}
                style={{ backgroundColor: `${bgColor}` }} >
                <Image
                  className="my-2"
                  src={image}
                  alt={alt}
                  width={72}
                  height={72}
                />
                <p className="text-white text-sm text-center" >{name}</p>
              </Link>
            ))
          }
        </div>
        <div>
        </div>
      </div>
    </main>
  );
}