import Project from "./_Project";

import { notFound } from "next/navigation";

import MhoangSBDotCom from "@/../public/mhoangsb-screenshot.png";
import FITG from "@/../public/fitg-screenshot.png";
import WorkOffice from "@/../public/workoffice-screenshot.png";
import WorkOffice2 from "@/../public/workoffice2.png";
import WorkOffice3 from "@/../public/workoffice3.png";
import WorkOffice4 from "@/../public/workoffice4.png";
import WorkOffice5 from "@/../public/workoffice5.png";
import WorkOffice6 from "@/../public/workoffice6.png";
import WorkOffice7 from "@/../public/workoffice7.png";
import WorkOffice8 from "@/../public/workoffice8.png";

import {
  AngularCard,
  AspNetCoreCard,
  CSharpCard,
  FlutterCard,
  NextJsCard,
  ReactCard,
  TailwindCssCard,
  TypeScriptCard,
  VercelCard,
} from "@/components/TechnologyCardCollection";
import {
  fillInTheGapDictionary,
  mhoangsbDictionary,
  workofficeDictionary,
} from "@/dictionaries/projectDictionary";

export async function generateStaticParams() {
  return [{ projectName: "mhoangsb" }, { projectName: "fill-in-the-gap" }];
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) {
  const { projectName } = await params;

  if (projectName === "mhoangsb-com") {
    return (
      <Project
        projectName="mhoangsb.com"
        hostedUrl="https://mhoangsb.com"
        githubRepoUrl="https://github.com/mhoangsb/mhoangsb-com"
        images={[MhoangSBDotCom]}
        technologies={[
          <ReactCard key={0} />,
          <NextJsCard key={1} />,
          <TailwindCssCard key={2} />,
          <TypeScriptCard key={3} />,
          <VercelCard key={4} />,
        ]}
        projectDictionary={mhoangsbDictionary}
      />
    );
  }

  if (projectName === "fill-in-the-gap") {
    return (
      <Project
        projectName="Fill In The Gap"
        hostedUrl="https://fitg.mhoangsb.com"
        githubRepoUrl="https://github.com/mhoangsb/fill-in-the-gap"
        images={[FITG]}
        technologies={[
          <ReactCard key={0} />,
          <NextJsCard key={1} />,
          <TailwindCssCard key={2} />,
          <TypeScriptCard key={3} />,
          <VercelCard key={4} />,
        ]}
        projectDictionary={fillInTheGapDictionary}
      />
    );
  }

  if (projectName === "workoffice") {
    return (
      <Project
        projectName="WorkOffice"
        hostedUrl={null}
        githubRepoUrl={null}
        images={[
          WorkOffice,
          WorkOffice2,
          WorkOffice3,
          WorkOffice4,
          WorkOffice5,
          WorkOffice6,
          WorkOffice7,
          WorkOffice8,
        ]}
        technologies={[
          <AngularCard key={0} />,
          <AspNetCoreCard key={3} />,
          <TypeScriptCard key={2} />,
          <CSharpCard key={4} />,
          <FlutterCard key={5} />,
        ]}
        projectDictionary={workofficeDictionary}
      />
    );
  }

  return notFound();
}
