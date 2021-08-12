import { createContext } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const MainContext = createContext();

const articleText = {
  introducer: [
    {
      h: "Introducing an extensible editor",
      p: "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
    },
    {
      h: "Robust content management",
      p: "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control",
    },
  ],
  infrastructure: {
    h: "State of the Art infrastructure",
    p: "With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive",
  },
  final: [
    {
      h: "Free, open, simple",
      p: "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics.The architecture is clean and is relatively easy to learn.",
    },
    {
      h: "Powerful tooling",
      p: "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
    },
  ],
};

const MainProvider = ({ children }) => {
  const responsiveAdd = useMediaQuery("(min-width: 975px)");
  const data = { articleText, responsiveAdd };
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export { MainProvider };
export default MainContext;
