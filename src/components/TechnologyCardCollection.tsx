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
import TechnologyCard from "./TechnologyCard";
import Image from "next/image";
import React from "react";

type TechnologyInfo = {
  svg: StaticImport;
  href: string;
  name: string;
};

const technologies = {
  HTML: {
    svg: HtmlSvg,
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    name: "HTML",
  },
  CSS: {
    svg: CssSvg,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    name: "CSS",
  },
  JavaScript: {
    svg: JavaScriptSvg,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    name: "JS",
  },
  TypeScript: {
    svg: TypeScriptSvg,
    href: "https://www.typescriptlang.org/",
    name: "TS",
  },
  TailwindCSS: {
    svg: TailwindCssSvg,
    href: "https://tailwindcss.com/",
    name: "Tailwind",
  },
  React: {
    svg: ReactSvg,
    href: "https://react.dev/",
    name: "React",
  },
  NextJS: {
    svg: NextJsSvg,
    href: "https://nextjs.org/",
    name: "NextJS",
  },
  Angular: {
    svg: AngularSvg,
    href: "https://angular.dev/",
    name: "Angular",
  },
  CSharp: {
    svg: CSharpSvg,
    href: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/",
    name: "C#",
  },
  AspNetCore: {
    svg: AspNetSvg,
    href: "https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-9.0",
    name: "Asp.Net",
  },
};

function createTechnologyCard(technology: TechnologyInfo): React.FC {
  const GeneratedTechnologyCardComponent = () => (
    <div className="shrink-0">
      <TechnologyCard href={technology.href} name={technology.name}>
        <Image
          src={technology.svg}
          alt={`${technology.name} logo`}
          unoptimized
        />
      </TechnologyCard>
    </div>
  );

  return GeneratedTechnologyCardComponent;
}

export const HtmlCard = createTechnologyCard(technologies.HTML);
export const CssCard = createTechnologyCard(technologies.CSS);
export const JavaScriptCard = createTechnologyCard(technologies.JavaScript);
export const TypeScriptCard = createTechnologyCard(technologies.TypeScript);
export const TailwindCssCard = createTechnologyCard(technologies.TailwindCSS);
export const ReactCard = createTechnologyCard(technologies.React);
export const NextJsCard = createTechnologyCard(technologies.NextJS);
export const AngularCard = createTechnologyCard(technologies.Angular);
export const CSharpCard = createTechnologyCard(technologies.CSharp);
export const AspNetCoreCard = createTechnologyCard(technologies.AspNetCore);
