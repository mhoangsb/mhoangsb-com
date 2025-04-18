import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export type ProjectCardParams = {
  imageSrc: StaticImageData;
  projectName: string;
};

export default function ProjectCard({
  imageSrc,
  projectName,
}: ProjectCardParams) {
  return (
    <Link href="#" className="group cursor-pointer">
      <Image
        className="aspect-video overflow-hidden rounded-xl border border-gray-800 group-hover:border-gray-600"
        src={imageSrc}
        alt={`${projectName} screenshot`}
      />
      <span className="relative mt-2 block w-full text-center text-base group-hover:underline group-hover:underline-offset-2">
        {projectName}
        <ArrowRightIcon className="absolute right-4 top-[50%] size-4 -translate-y-[50%] transition-transform group-hover:translate-x-4" />
      </span>
    </Link>
  );
}
