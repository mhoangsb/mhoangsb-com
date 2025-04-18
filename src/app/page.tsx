import Image from "next/image";
import GithubAvatar from "@/../public/github_avatar.png";
import MhoangSBDotCom from "@/../public/mhoangsb-screenshot.png";
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
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto mb-20 mt-10 flex max-w-2xl flex-col gap-14 px-4">
      <header>
        <Image
          src={GithubAvatar}
          alt="Github avatar image"
          className="aspect-square h-16 w-auto rounded-full"
        />
        <h1 className="mt-4 text-xl text-white sm:text-2xl">MHoangSB</h1>
        <div className="mb-5 mt-4 h-[1px] bg-gray-700"></div>
        <p className="text-sm sm:text-base">
          Frontend developer (soon-to-be fullstack)
        </p>
      </header>

      <section className="text-sm sm:text-base">
        <h2 className="text-base text-white sm:text-lg">Contact</h2>
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

      <section className="text-sm sm:text-base">
        <h2 className="text-base text-white sm:text-lg">About me</h2>
        <div className="mb-5 mt-4 h-[1px] bg-gray-700"></div>
        <p className="mt-4 leading-relaxed">
          {
            "Hi, my name is Mạnh Hoàng (mhoang), but my friends also call me SB."
          }
        </p>
        <p className="mt-4 leading-relaxed">
          {
            "I'm a frontend developer on a journey to becoming a senior full-stack developer."
          }
        </p>
        <p className="mt-4 leading-relaxed">
          {
            "Passionate about coding, I thrive on continuous learning through hands-on experience—building things, breaking them, fixing them, and improving along the way. There's nothing more rewarding than seeing my code run successfully for the first time."
          }
        </p>
        <p className="mt-4 leading-relaxed">
          {
            "I learn quickly by reading official documentation. I can work independently, researching and solving problems on my own"
          }
        </p>
        <p className="mt-4 leading-relaxed">
          {
            "I have experience with React, Next.js, and Angular. I’m confident in core web technologies like HTML, CSS, and JavaScript. I prefer TypeScript over JavaScript and enjoy using TailwindCSS more than plain CSS."
          }
        </p>
        <p className="mt-4 leading-relaxed">
          {
            "I have contributed to an ASP.NET Core codebase by implementing small features and handling maintenance. I also have knowledge of Node.js/Express, though I haven't used it extensively in real projects."
          }
        </p>
        <p className="mt-4 leading-relaxed">
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
        <h2 className="text-white sm:text-lg">Technologies that I use</h2>
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

      <section>
        <h2 className="text-white sm:text-lg">Things I’ve built</h2>
        <div className="mb-5 mt-4 h-[1px] bg-gray-700"></div>

        <div className="grid gap-8 sm:grid-cols-2">
          <Link href="#" className="group cursor-pointer">
            <Image
              className="aspect-video overflow-hidden rounded-xl border border-gray-800 group-hover:border-gray-600"
              src={MhoangSBDotCom}
              alt="mhoangsb.com screenshot"
            />
            <span className="mt-2 block w-full text-center text-base group-hover:underline group-hover:underline-offset-2">
              mhoangsb.com
            </span>
          </Link>
          <div className="h-full border border-red-600"></div>
        </div>
      </section>
    </main>
  );
}
