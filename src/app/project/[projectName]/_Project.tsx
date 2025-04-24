"use client";

import LanguageSelector from "@/components/LanguageSelector";
import { useCurrentLanguage } from "@/contexts/CurrentLanguageContext";
import sharedProjectDictionary from "@/dictionaries/sharedProjectDictionary";
import { Language } from "@/utils/language";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export type Paragraph = string;

export type ProjectDictionary = Record<
  Language,
  {
    about: Paragraph[];
    myRole: Paragraph[];
    interestingInfo: Paragraph[];
  }
>;

export type ProjectParams = {
  projectName: string;
  images: StaticImageData[];
  hostedUrl: string | null;
  githubRepoUrl: string | null;
  technologies: React.ReactNode[];
  projectDictionary: ProjectDictionary;
};

export default function Project({
  projectName,
  images,
  hostedUrl,
  githubRepoUrl,
  technologies,
  projectDictionary,
}: ProjectParams) {
  const currentLanguage = useCurrentLanguage();

  const sharedProjectContent = sharedProjectDictionary[currentLanguage];
  const projectContent = projectDictionary[currentLanguage];

  return (
    <main className="flex flex-col gap-14 sm:mt-14">
      <header>
        <h1 className="relative flex gap-x-1 text-xl text-white sm:text-2xl">
          <Link
            className="group flex items-center pl-5 pr-5 hover:cursor-pointer"
            href="/"
          >
            <ArrowLeftIcon className="size-5 text-gray-400 transition-all group-hover:-translate-x-5 group-hover:text-white sm:size-6" />
          </Link>
          <span>{projectName}</span>
          <LanguageSelector />
        </h1>
        <div className="mt-4 h-[1px] bg-gray-700"></div>
      </header>

      <Carousel className="-my-5">
        <CarouselContent>
          {images.map((image, i) => (
            <CarouselItem key={i}>
              <Dialog>
                <DialogTrigger>
                  <Image
                    className="border border-gray-600"
                    src={image}
                    alt="project screenshot"
                    priority
                  />
                </DialogTrigger>
                <DialogContent className="max-w-screen-2xl border-none p-0 sm:rounded-none">
                  <DialogHeader className="space-y-0">
                    <DialogTitle className="sr-only">Project screenshot</DialogTitle>
                    <DialogDescription className="">
                      <Image
                        className=""
                        src={image}
                        alt="project screenshot"
                        unoptimized
                      />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <div className="-mb-7 mt-5 flex justify-center gap-5">
            <CarouselPrevious className="static border-none bg-transparent" />
            <CarouselNext className="static border-none bg-transparent" />
          </div>
        )}
      </Carousel>

      {(hostedUrl || githubRepoUrl) && (
        <section className="text-sm sm:text-base">
          <h2 className="text-base text-white sm:text-lg">
            {sharedProjectContent.links}
          </h2>
          <div className="mb-5 mt-4 h-[1px] bg-gray-700"></div>
          {hostedUrl && (
            <div className="mb-1 flex justify-between">
              <span>{sharedProjectContent.domain}:</span>
              <a
                href={hostedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white"
              >
                {hostedUrl.replace("https://", "")}
              </a>
            </div>
          )}
          {githubRepoUrl && (
            <div className="mb-1 flex justify-between">
              <span>Github Repo:</span>
              <a
                href={githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white"
              >
                {githubRepoUrl.replace("https://", "")}
              </a>
            </div>
          )}
        </section>
      )}

      <section className="text-sm sm:text-base">
        <h2 className="text-base text-white sm:text-lg">
          {sharedProjectContent.technologies}
        </h2>
        <div className="mb-5 mt-4 h-[1px] bg-gray-700"></div>
        <div className="mt-5 grid grid-cols-4 gap-8 sm:grid-cols-6">
          {...technologies}
        </div>
      </section>

      {projectContent.about.length > 0 && (
        <Section title={sharedProjectContent.about} paragraphs={projectContent.about} />
      )}

      {projectContent.myRole.length > 0 && (
        <Section title={sharedProjectContent.myRole} paragraphs={projectContent.myRole} />
      )}

      {projectContent.interestingInfo.length > 0 && (
        <Section
          title={sharedProjectContent.interestingInfo}
          paragraphs={projectContent.interestingInfo}
        />
      )}
    </main>
  );
}

function Section({ title, paragraphs }: { title: string; paragraphs: Paragraph[] }) {
  return (
    <section className="text-sm sm:text-base">
      <h2 className="text-base text-white sm:text-lg">{title}</h2>
      <div className="mb-5 mt-4 h-[1px] bg-gray-700"></div>
      {paragraphs.map((paragraph, i) => (
        <p key={i} className="mt-4 leading-relaxed">
          {paragraph}
        </p>
      ))}
    </section>
  );
}
