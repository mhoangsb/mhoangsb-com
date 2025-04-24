"use client";

import Image from "next/image";
import GithubAvatar from "@/../public/github_avatar.png";
import MhoangSBDotCom from "@/../public/mhoangsb-screenshot.png";
import FITG from "@/../public/fitg-screenshot.png";
import WorkOffice from "@/../public/workoffice-screenshot.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ClickToCopy from "@/components/ClickToCopy";
import {
  AngularCard,
  AspNetCoreCard,
  CSharpCard,
  CssCard,
  HtmlCard,
  JavaScriptCard,
  NextJsCard,
  ReactCard,
  TailwindCssCard,
  TypeScriptCard,
} from "@/components/TechnologyCardCollection";
import ProjectCard, { ProjectCardParams } from "@/components/ProjectCard";
import { useCurrentLanguage } from "@/contexts/CurrentLanguageContext";
import homePageDictionary from "@/dictionaries/homePageDictionary";
import LanguageSelector from "@/components/LanguageSelector";

export default function HomePage() {
  const currentLanguage = useCurrentLanguage();
  const dictionary = homePageDictionary[currentLanguage];

  const projects: ProjectCardParams[] = [
    {
      imageSrc: MhoangSBDotCom,
      projectName: "mhoangsb.com",
      href: `/project/mhoangsb-com`,
    },
    {
      imageSrc: FITG,
      projectName: "Fill In The Gap",
      href: `/project/fill-in-the-gap`,
    },
    {
      imageSrc: WorkOffice,
      projectName: "WorkOffice",
      href: `/project/workoffice`,
    },
  ];

  return (
    <main className="flex flex-col gap-14">
      <header>
        <Image
          src={GithubAvatar}
          alt="Github avatar image"
          className="aspect-square h-16 w-auto rounded-full"
        />
        <h1 className="relative mt-4 text-xl text-white sm:text-2xl">
          <span>MHoangSB</span>
          <LanguageSelector />
        </h1>
        <div className="mb-5 mt-4 h-[1px] bg-gray-700"></div>
        <p className="text-sm sm:text-base">{dictionary.header}</p>
      </header>

      <section className="text-sm sm:text-base">
        <h2 className="text-base text-white sm:text-lg">{dictionary.contact.title}</h2>
        <div className="mb-5 mt-4 h-[1px] bg-gray-700"></div>
        <div className="mb-1 flex justify-between">
          <span>Website:</span>
          <TooltipProvider delayDuration={100}>
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

      <section className="text-sm sm:text-base">
        <h2 className="text-base text-white sm:text-lg">{dictionary.aboutMe.title}</h2>
        <div className="mb-5 mt-4 h-[1px] bg-gray-700"></div>
        {dictionary.aboutMe.content.map((paragraph, i) => (
          <p key={i} className="mt-4 leading-relaxed">
            {paragraph}
          </p>
        ))}
        <p className="mt-4 leading-relaxed">
          {dictionary.aboutMe.archNeovim + " "}
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
        <h2 className="text-white sm:text-lg">{dictionary.technologies.title}</h2>
        <div className="mb-5 mt-4 h-[1px] bg-gray-700"></div>
        <div className="mt-5 grid grid-cols-4 gap-8 sm:grid-cols-6">
          <ReactCard />
          <NextJsCard />
          <AngularCard />
          <HtmlCard />
          <CssCard />
          <JavaScriptCard />
          <TypeScriptCard />
          <TailwindCssCard />
          <CSharpCard />
          <AspNetCoreCard />
        </div>
      </section>

      <section className="text-sm sm:text-base">
        <h2 className="text-base text-white sm:text-lg">{dictionary.experience.title}</h2>
        <div className="mb-5 mt-4 h-[1px] bg-gray-700"></div>
        {dictionary.experience.content.map((paragraph, i) => (
          <p key={i} className="mt-4 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </section>

      <section>
        <h2 className="text-white sm:text-lg">{dictionary.projects.title}</h2>
        <div className="mb-5 mt-4 h-[1px] bg-gray-700"></div>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard {...project} key={project.href} />
          ))}
        </div>
      </section>
    </main>
  );
}
