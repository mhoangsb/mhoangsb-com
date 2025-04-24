import type { Language } from "@/utils/language";

const en = {
  links: "Links",
  technologies: "Technology stack",
  domain: "Domain",
  about: "About",
  myRole: "My role",
  interestingInfo: "Interesting information",
};

const vi: typeof en = {
  links: "Đường dẫn",
  technologies: "Công nghệ được sử dụng",
  domain: "Domain",
  about: "Giới thiệu",
  myRole: "Vai trò của mình",
  interestingInfo: "Thông tin thú vị",
};

const sharedProjectDictionary: Record<Language, typeof en> = {
  en,
  vi,
};

export default sharedProjectDictionary;
