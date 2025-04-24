import { Language } from "@/utils/language";

const en = {
  header: "Frontend developer (soon-to-be fullstack)",
  contact: {
    title: "Reach me",
  },
  aboutMe: {
    title: "About me",
    content: [
      "Hi, my name is Mạnh Hoàng (mhoang), but my friends also call me SB.",
      "I'm a frontend developer on a journey to becoming a senior full-stack developer.",
      "Passionate about coding, I thrive on continuous learning through hands-on experience—building things, breaking them, fixing them, and improving along the way. There's nothing more rewarding than seeing my code run successfully for the first time.",
      "I learn quickly by reading official documentation. I can work independently, researching and solving problems on my own",
    ],
    archNeovim: "Oh, and I use",
  },
  experience: {
    title: "Experience",
    content: [
      "I have experience with React, Next.js, and Angular, having worked on several projects using these technologies—both in personal projects and in production as a freelancer.",
      "I’m confident in core web technologies like HTML, CSS, and JavaScript. I prefer TypeScript over JavaScript and enjoy using TailwindCSS more than plain CSS.",
      "I have contributed to an ASP.NET Core codebase while working as a freelancer, implementing small features and performing maintenance tasks. I also have knowledge of Node.js/Express, though I haven't used it extensively in real projects.",
      "While working as a freelancer, I’ve also fixed small bugs and handled maintenance for various PHP websites.",
    ],
  },
  technologies: {
    title: "Technologies that I use",
  },
  projects: {
    title: "Things I’ve built",
  },
};

const vi: typeof en = {
  header: "Lập trình viên Frontend (sẽ trở thành Fullstack)",
  contact: {
    title: "Kết nối",
  },
  aboutMe: {
    title: "Về mình",
    content: [
      "Xin chào. Mình tên là Mạnh Hoàng. SB là nickname bạn mình đặt cho mình.",
      "Mình là lập trình viên Frontend với định hướng trở thành lập trình viên Fullstack.",
      "Mình yêu thích lập trình. Mình tin rằng phương pháp học hiệu quả nhất là học thông qua thực hành: phát triển sản phẩm, viết bug, sửa bug, học thêm cái mới. Không có gì làm mình vui hơn việc thấy code của mình pass hết tất cả các test, hoàn thành một tính năng.",
      "Mình có khả năng làm việc độc lập, tự nghiên cứu, học các công nghệ mới bằng cách đọc tài liệu gốc (tiếng Anh).",
    ],
    archNeovim: "Còn cái này nữa, mình sử dụng",
  },
  experience: {
    title: "Kinh nghiệm",
    content: [
      "Mình có kinh nghiệm làm việc với React, Next.js và Angular, qua các dự án cá nhân cũng như dự án thực tế khi mình làm freelance.",
      "Mình có kiến thức về các công nghệ web cơ bản như HTML, CSS và JavaScript thuần. Mình thích TypeScript hơn vanilla JavaScript và thích TailwindCSS hơn CSS thuần.",
      "Trong khi làm freelance, mình từng tham gia vào project ASP.NET Core: thêm một vài tính năng và bảo trì codebase. Mình cũng biết về Node.js/Express, tuy nhiên chưa làm dự án thực tế nào sử dụng công nghệ này.",
      "Mình từng sửa bug và bảo trì vài trang web PHP trong khi làm freelance.",
    ],
  },
  technologies: {
    title: "Công nghệ mình sử dụng",
  },
  projects: {
    title: "Project mình đã làm",
  },
};

const homePageDictionary: Record<Language, typeof en> = {
  en,
  vi,
};

export default homePageDictionary;
