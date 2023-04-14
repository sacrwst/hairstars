import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const DefaultLayout = (props: Props) => {
  return (
    <div className="max-w-xl mx-auto">
      <header className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="w-5/12">
            <Link href="/" className="block">
              <Image
                src="/logo.png"
                alt="HairStarsロゴ"
                width={300}
                height={100}
              />
            </Link>
          </h1>
          <div className="cursor-pointer">アイコン</div>
        </div>
      </header>
      <main className="bg-slate-100 px-4 py-8">{props.children}</main>
      <footer>footer</footer>
    </div>
  );
};
