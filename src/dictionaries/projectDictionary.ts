import { ProjectDictionary } from "@/app/project/[projectName]/_Project";

export const mhoangsbDictionary: ProjectDictionary = {
  en: {
    about: [
      "mhoangsb.com is my personal portfolio website, designed to showcase my skills, projects, and experience as a software developer. It serves as a central place where potential employers, collaborators, and other developers can learn more about me, explore the work I've done, and get in touch.",
      "The website is built with Next.js, React, Tailwind CSS, and TypeScript, and is deployed on Vercel. The complete codebase is open-source and available on GitHub—see the link in the section above.",
    ],
    myRole: [
      "This is a solo project where I was responsible for everything—from ideation and design to coding and deployment.",
    ],
    interestingInfo: [],
  },
  vi: {
    about: [
      "mhoangsb.com là trang web cá nhân của mình, nơi mình tự giới thiệu kiến thức, kinh nghiệm, các dự án mình đã làm trong vai trò một lập trình viên. Trang web này giúp các nhà tuyển dụng hoặc các lập trình viên khác có thể tìm hiểu thêm về mình và thông tin liên lạc của mình.",
      "Được phát triển sử dụng công nghệ Next.js, React, TailwindCSS, TypeScript và deploy ở Vercel. Codebase được mình open-source trên Github, có kèm theo link ở phần trên.",
    ],
    myRole: [
      "Một mình mình phát triển trang web này, từ giai đoạn lên ý tưởng, thiết kế, code cho đến deploy lên Vercel.",
    ],
    interestingInfo: [],
  },
};

export const fillInTheGapDictionary: ProjectDictionary = {
  en: {
    about: [
      "Fill In The Gap is a web-based game I built where users complete famous quotes by filling in the missing characters. The goal of the project was to create an engaging, interactive experience that allows users to learn English and explore famous quotes at the same time.",
      "Key features include user authentication with persistent login, a leaderboard to rank top players, and game history tracking so users can review their past attempts and progress.",
      "The website is built with Next.js, React, Tailwind CSS, and TypeScript, and is deployed on Vercel. The complete codebase is open-source and available on GitHub—see the link in the section above.",
      "The backend is built using RSC server action (deployed as Vercel serverless function) to handle application logic and persist data in Prisma Postgres database.",
    ],
    myRole: ["I work on this project as a solo developer"],
    interestingInfo: [],
  },
  vi: {
    about: [
      "Fill In The Gap là trang web giúp người dùng vừa học Tiếng Anh vừa biết thêm về các câu quote nổi tiếng. Nhiệm vụ của người chơi là hoàn thành các câu quote bằng cách điền các ký tự bị thiếu.",
      "Trang web có các tính năng: chơi game, đăng nhập, lưu lịch sử chơi, tham gia vào bảng xếp hạng.",
      "Được phát triển sử dụng công nghệ Next.js, React, TailwindCSS, TypeScript và deploy ở Vercel. Codebase được mình open-source trên Github, có kèm theo link ở phần trên.",
      "Phần backend mình sử dụng server action RSC (được deploy là serverless function ở Vercel) để chạy logic và lưu dữ liệu ở Prisma Postgres.",
    ],
    myRole: ["Trang web này được phát triển bởi một mình mình."],
    interestingInfo: [],
  },
};

export const workofficeDictionary: ProjectDictionary = {
  en: {
    about: [
      "WorkOffice is a website where employers can post job descriptions and people looking for jobs can find and apply for them. It also has a built-in chat feature so employers and job seekers can talk directly with each other.",
      "Besides the job feature, WorkOffice also has a blog section where the admin can post helpful articles and updates. This gives users more information about job searching, hiring tips, and other useful topics.",
      "The project includes a web app, a backend server, and a mobile app. The web app is built with Angular, the backend is made with ASP.NET Core, and the mobile app is created using Flutter.",
    ],
    myRole: [
      "I worked on the WorkOffice project as a freelancer. I am the sole developer responsible for building the web app using Angular. My main tasks included turning designs from the designer into a fully functional frontend and working closely with the backend developer to connect the web app to the server.",
      "In addition to frontend work, I also helped maintain the backend, which is built with ASP.NET Core. I implemented some small features on the backend, such as login with Apple and push notifications using Firebase Cloud Messaging (FCM).",
    ],
    interestingInfo: [],
  },
  vi: {
    about: [
      "WorkOffice là trang web nơi nhà tuyển dụng có thể đăng mô tả công việc và người tìm việc có thể tìm kiếm và nộp đơn. Trang web cũng có tính năng chat trực tuyến để nhà tuyển dụng và người tìm việc có thể trao đổi trực tiếp với nhau.",
      "Bên cạnh tính năng tìm việc, WorkOffice còn có mục blog cho phép quản trị viên đăng các bài viết và cập nhật hữu ích.",
      "WorkOffice bao gồm ứng dụng web, máy chủ backend và ứng dụng di động. Ứng dụng web được phát triển bằng Angular, backend được phát triển bằng ASP.NET Core, và ứng dụng di động được phát triển bằng Flutter.",
    ],
    myRole: [
      "Mình tham gia dự án WorkOffice là một freelancer. Mình là người duy nhất đảm nhiệm phát triển ứng dụng web bằng Angular. Công việc của mình là phát triển frontend dựa trên bản thiết kế từ designer và làm việc với bên backend để ghép API.",
      "Bên cạnh frontend, mình có tham gia bảo trì phần backend được xây dựng bằng ASP.NET Core. Mình cũng đã phát triển một số tính năng nhỏ trên backend, chẳng hạn như đăng nhập bằng Apple và gửi thông báo đẩy bằng Firebase Cloud Messaging (FCM).",
    ],
    interestingInfo: [],
  },
};
