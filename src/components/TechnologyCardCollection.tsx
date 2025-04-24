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
import FlutterSvg from "@/../public/flutter-svgrepo-com.svg";
import VercelSvg from "@/../public/vercel-fill-svgrepo-com.svg";
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
  Flutter: {
    svg: FlutterSvg,
    href: "https://flutter.dev/",
    name: "Flutter",
  },
  Vercel: {
    svg: VercelSvg,
    href: "https://vercel.com/home",
    name: "Vercel",
  },
};

function TechnologyCardCore({ techInfo }: { techInfo: TechnologyInfo }) {
  return (
    <div className="shrink-0">
      <TechnologyCard href={techInfo.href} name={techInfo.name}>
        <Image src={techInfo.svg} alt={`${techInfo.name} logo`} unoptimized />
      </TechnologyCard>
    </div>
  );
}

export const HtmlCard = () => <TechnologyCardCore techInfo={technologies.HTML} />;

export const CssCard = () => <TechnologyCardCore techInfo={technologies.CSS} />;

export const JavaScriptCard = () => (
  <TechnologyCardCore techInfo={technologies.JavaScript} />
);

export const TypeScriptCard = () => (
  <TechnologyCardCore techInfo={technologies.TypeScript} />
);

export const TailwindCssCard = () => (
  <TechnologyCardCore techInfo={technologies.TailwindCSS} />
);

export const ReactCard = () => <TechnologyCardCore techInfo={technologies.React} />;

export const NextJsCard = () => <TechnologyCardCore techInfo={technologies.NextJS} />;

export const AngularCard = () => <TechnologyCardCore techInfo={technologies.Angular} />;

export const CSharpCard = () => <TechnologyCardCore techInfo={technologies.CSharp} />;

export const AspNetCoreCard = () => (
  <TechnologyCardCore techInfo={technologies.AspNetCore} />
);

export const FlutterCard = () => <TechnologyCardCore techInfo={technologies.Flutter} />;

export const VercelCard = () => <TechnologyCardCore techInfo={technologies.Vercel} />;
