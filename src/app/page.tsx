import Image from "next/image";

import ClickToCopy from "@/components/ClickToCopy";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TechnologyCard from "@/components/TechnologyCard";

import GithubAvatar from "@/../public/github_avatar.png";
import AngularSvg from "@/../public/angular-svgrepo-com.svg";
import AspNetSvg from "@/../public/aspnet-svgrepo-com.svg";
import CSharpSvg from "@/../public/csharp-svgrepo-com.svg";
import CssSvg from "@/../public/css3-svgrepo-com.svg";
import HtmlSvg from "@/../public/html-5-svgrepo-com.svg";
import JavaScriptSvg from "@/../public/javascript-svgrepo-com.svg";
import NextJsSvg from "@/../public/nextjs-fill-svgrepo-com.svg";
import ReactSvg from "@/../public/react-logo-svgrepo-com.svg";
import TailwindCssSvg from "@/../public/tailwindcss-icon-svgrepo-com.svg";
import TypeScriptSvg from "@/../public/typescript-official-svgrepo-com.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type TechnologyInfo = {
  svg: StaticImport;
  href: string;
  name: string;
};

export default function HomePage() {
  const technologies: TechnologyInfo[] = [
    {
      svg: HtmlSvg,
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      name: "HTML",
    },
    {
      svg: CssSvg,
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      name: "CSS",
    },
    {
      svg: JavaScriptSvg,
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      name: "JS",
    },
    {
      svg: TypeScriptSvg,
      href: "https://www.typescriptlang.org/",
      name: "TS",
    },
    {
      svg: TailwindCssSvg,
      href: "https://tailwindcss.com/",
      name: "Tailwind",
    },
    {
      svg: ReactSvg,
      href: "https://react.dev/",
      name: "React",
    },
    {
      svg: NextJsSvg,
      href: "https://nextjs.org/",
      name: "NextJS",
    },
    {
      svg: AngularSvg,
      href: "https://angular.dev/",
      name: "Angular",
    },
    {
      svg: CSharpSvg,
      href: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/",
      name: "C#",
    },
    {
      svg: AspNetSvg,
      href: "https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-9.0",
      name: "Asp.Net",
    },
  ];

  return (
    <main className="mx-auto mb-20 mt-10 flex max-w-xl flex-col gap-14 px-4">
      <header>
        <Image
          src={GithubAvatar}
          alt="Github avatar image"
          className="aspect-square h-16 w-auto rounded-full"
        />
        <h1 className="mt-4 text-xl text-white">MHoangSB</h1>
        <div className="mb-5 mt-4 h-[1px] bg-gray-700"></div>
        <p className="text-sm">Frontend developer (soon-to-be fullstack)</p>
      </header>

      <section className="text-sm">
        <h2 className="text-base text-white">Contact</h2>
        <div className="mb-5 mt-4 h-[1px] bg-gray-700"></div>
        <div className="mb-1 flex justify-between">
          <span>Website:</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span className="hover:text-white">mhoangsb.com</span>
              </TooltipTrigger>
              <TooltipContent>
                <p>You are currently at this site</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="mb-1 flex justify-between">
          <span>Email:</span>
          <ClickToCopy clipboardContent="mhoangsb@gmail.com">
            <span className="hover:cursor-pointer hover:text-white">
              mhoangsb@gmail.com
            </span>
          </ClickToCopy>
        </div>
        <div className="mb-1 flex justify-between">
          <span>Github:</span>
          <a
            href="https://github.com/mhoangsb"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-white"
          >
            github.com/mhoangsb
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-base text-white">About me</h2>
        <div className="mb-5 mt-4 h-[1px] bg-gray-700"></div>
        <p className="mt-4 text-sm leading-relaxed">
          {
            "Hi, my name is Mạnh Hoàng (mhoang), but my friends also call me SB."
          }
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          {
            "I'm a frontend developer on a journey to becoming a senior full-stack developer."
          }
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          {
            "Passionate about coding, I thrive on continuous learning through hands-on experience—building things, breaking them, fixing them, and improving along the way. There's nothing more rewarding than seeing my code run successfully for the first time."
          }
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          {
            "I learn quickly by reading official documentation. I can work independently, researching and solving problems on my own"
          }
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          {
            "I have experience with React, Next.js, and Angular. I’m confident in core web technologies like HTML, CSS, and JavaScript. I prefer TypeScript over JavaScript and enjoy using TailwindCSS more than plain CSS."
          }
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          {
            "I have contributed to an ASP.NET Core codebase by implementing small features and handling maintenance. I also have knowledge of Node.js/Express, though I haven't used it extensively in real projects."
          }
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          Oh, and I use{" "}
          <a
            href="https://wiki.archlinux.org/title/Main_page"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-blue-600"
          >
            Arch
          </a>{" "}
          +{" "}
          <a
            href="https://github.com/neovim/neovim"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-lime-700"
          >
            Neovim
          </a>{" "}
          btw.
        </p>
      </section>

      <section>
        <h2 className="text-base text-white">Technologies that I use</h2>
        <div className="mb-5 mt-4 h-[1px] bg-gray-700"></div>
        <div className="mt-5 flex flex-wrap gap-8">
          {technologies.map((tech, i) => (
            <div className="shrink-0" key={i}>
              <TechnologyCard href={tech.href} name={tech.name}>
                <Image src={tech.svg} alt={`${tech.name} logo`} unoptimized />
              </TechnologyCard>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
