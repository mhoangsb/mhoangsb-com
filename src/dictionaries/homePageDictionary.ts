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
      "I have experience with React, Next.js, and Angular. I’m confident in core web technologies like HTML, CSS, and JavaScript. I prefer TypeScript over JavaScript and enjoy using TailwindCSS more than plain CSS.",
      "I have contributed to an ASP.NET Core codebase by implementing small features and handling maintenance. I also have knowledge of Node.js/Express, though I haven't used it extensively in real projects.",
    ],
    archNeovim: "Oh, and I use",
  },
  technologies: {
    title: "Technologies that I use",
  },
  projects: {
    title: "Things I’ve built",
  },
};

const vi: typeof en = {
  header: "Lập trình viên Frontend (với định hướng trở thành Fullstack)",
  contact: {
    title: "Kết nối",
  },
  aboutMe: {
    title: "Về mình",
    content: [
      "Xin chào. Mình tên là Mạnh Hoàng. SB là nickname bạn mình đặt cho mình.",
      "Mình là lập trình viên Frontend với định hướng trở thành lập trình viên Fullstack.",
      "Mình yêu thích lập trình. Mình tin rằng phương pháp học hiệu quả nhất là học thông qua thực hành: phát triển sản phẩm, viết bug, sửa bug, biết thêm cái mới. Không có gì làm mình vui hơn việc thấy code của mình pass hết tất cả các test, hoàn thành một tính năng.",
      "Mình có khả năng làm việc độc lập, tự nghiên cứu, học các công nghệ mới bằng cách đọc tài liệu gốc (tiếng Anh).",
      "Mình có kiến thức, kinh nghiệm thực tế về React, Next.js và Angular cũng HTML, CSS, JavaScript thuần. Mình thích sử dụng TailwindCSS hơn CSS thuần.",
      "Mình đã từng tham gia vào một project ASP.NET Core: thêm một vài tính năng và bảo trì codebase. Mình cũng biết về Node.js/Express, tuy nhiên mình chưa làm dự án thực tế nào sử dụng công nghệ này.",
    ],
    archNeovim: "Còn cái này nữa, mình sử dụng",
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
