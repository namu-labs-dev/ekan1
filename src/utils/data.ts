import { message } from "antd";

import { type SocialLinks } from "~/components/Components/SocialIconsComponent/SocialIconsComponent";
import NavbarStore from "~/store/NavbarStore";

const SocialIconsComponentProps = {
  socialLinks: [
    {
      iconName: "behance",
      link: "#",
    },
    {
      iconName: "github",
      link: "#",
    },
    {
      iconName: "linkedin",
      link: "#",
    },
    {
      iconName: "dribble",
      link: "#",
    },
  ] as SocialLinks,
};

const onFinish = () => {
  // console.log("Done");
  void message.info("Done");
};

const closeNav = () => {
  NavbarStore.close();
};

const toggleNav = () => {
  NavbarStore.toggle();
};

export const navMenuListComponentProps = {
  navItems: [
    {
      name: "Home",
      link: "#",
      onClick: closeNav,
    },
    {
      name: "Services",
      link: "#",
      scrollToIndex: 1,
      onClick: closeNav,
    },
    {
      name: "About",
      link: "#",
      scrollToIndex: 2,
      onClick: closeNav,
    },
    {
      name: "Portfolio",
      link: "#",
      scrollToIndex: 3,
      onClick: closeNav,
    },
    {
      name: "Price",
      link: "#",
      scrollToIndex: 4,
      onClick: closeNav,
    },
    {
      name: "Contact",
      link: "#",
      scrollToIndex: 5,
      onClick: closeNav,
    },
    {
      name: "Blog",
      link: "#",
      scrollToIndex: 6,
      onClick: closeNav,
    },
  ],
};

export const darkLightPreviewComponentProps = {
  darkLightProps: [
    {
      imageUrl: "/assets/1.png",
      title: "Dark Mode",
      route: "/dark",
    },
    {
      imageUrl: "/assets/2.png",
      title: "Light Mode",
      route: "/light",
    },
  ],
};

export const linesComponentProps = {
  numberOfLines: 5,
};

export const utilityModulesProps = {
  linesComponentProps: { numberOfLines: 5, className: "bg-[--background]" },
};

export const homeUtilityModulesProps = {
  linesComponentProps: { numberOfLines: 5, className: "bg-[--background3]" },
};

export const mainHeaderModuleProps = {
  SocialIconsComponentProps,
  navMenuListComponentProps,
  navContactToggleComponentProps: {
    toggleAtomProps: {
      onClick: toggleNav,
    },
  },
};

export const mainTopNavigationComponent = {
  navMenuListComponentProps,
};

export const mainHeroModuleProps = {
  heroProfileComponentProps: {
    iconOverlayComponentProps: {
      Icons: [
        {
          width: 24,
          height: 24,
          imageUrl: "/assets/icon1.png",
          className: "icon1",
        },
        {
          width: 24,
          height: 24,
          imageUrl: "/assets/icon2.png",
          className: "icon2",
        },
        {
          width: 24,
          height: 24,
          imageUrl: "/assets/icon3.png",
          className: "icon3",
        },
      ],
    },
    SocialIconsComponentProps,
  },
};

export const mainServicesModuleProps = {
  navMenuListComponentProps,
  servicesInsightsComponentProps: {
    insights: [
      {
        imageUrl: "/assets/service1.png",
        title: "UI / UX DESIGN",
        description:
          "There are many variations of passages of available but to the majority have suffered but the into majority.",
      },
      {
        imageUrl: "/assets/service2.png",
        title: "WEB DEVELOPMENT",
        description:
          "There are many variations of passages of available but to the majority have suffered but the into majority.",
      },
      {
        imageUrl: "/assets/service3.png",
        title: "SEO / MARKETING",
        description:
          "There are many variations of passages of available but to the majority have suffered but the into majority.",
      },
      {
        imageUrl: "/assets/service4.png",
        title: "TECHNOLOGY SOLUTION",
        description:
          "There are many variations of passages of available but to the majority have suffered but the into majority.",
      },
    ],
  },
};

export const mainAboutModuleProps = {
  aboutSkillComponentProps: {
    skills: [
      {
        imageUrl: "/assets/skill1.png",
        title: "UI / UX Design",
        progress: 95,
      },
      {
        imageUrl: "/assets/skill2.png",
        title: "Development",
        progress: 90,
      },
      {
        imageUrl: "/assets/skill3.png",
        title: "Graphic Design",
        progress: 85,
      },
      {
        imageUrl: "/assets/skill4.png",
        title: "WordPress",
        progress: 78,
      },
    ],
  },
  awardsComponentProps: {
    awards: [
      {
        serial: 0o1,
        year: 2019,
        imageUrl: "/assets/award1.png",
        title: "02x Designer Award",
        accolade: "NOMINEE",
      },
      {
        serial: 0o2,
        year: 2020,
        imageUrl: "/assets/award2.png",
        title: "02x Designer Award",
        accolade: "WINNER",
      },
      {
        serial: 0o3,
        year: 2021,
        imageUrl: "/assets/award2.png",
        title: "02x Designer Award",
        accolade: "RUNNERS UP",
      },
    ],
  },
};

export const mainPortfolioModuleProps = {
  portfolioWorksComponentProps: {
    portfolios: [
      {
        imageUrl: "/assets/portfolio1.jpg",
        title: "GeekFolio Portfolio",
      },
      {
        imageUrl: "/assets/portfolio2.jpg",
        title: "Luxury Modern Website",
      },
      {
        imageUrl: "/assets/portfolio1.jpg",
        title: "GeekFolio Portfolio",
      },
      {
        imageUrl: "/assets/portfolio2.jpg",
        title: "Luxury Modern Website",
      },
    ],
  },
};

export const mainDarkPortfolioModuleProps = {
  portfolioWorksComponentProps: {
    portfolios: [
      {
        imageUrl: "/assets/portfolio1.jpg",
        title: "GeekFolio Portfolio",
      },
      {
        imageUrl: "/assets/portfolio2.jpg",
        title: "Luxury Modern Website",
      },
      {
        imageUrl: "/assets/portfolio3.jpg",
        title: "Partiner BPO",
      },
      {
        imageUrl: "/assets/portfolio3.jpg",
        title: "Partiner BPO",
      },
    ],
  },
};

export const mainPricingModuleProps = {
  pricingOptionsComponentProps: {
    options: [
      {
        title: "Basic",
        price: 19,
        features: [
          "Need your wireframe",
          "Design with Figma, Framer",
          "Implement with Webflow, React, WordPress, Laravel/PHP",
          "Support 6 months",
        ],
      },
      {
        title: "Popular",
        price: 39,
        features: [
          "Need your wireframe",
          "Design with Figma, Framer",
          "Implement with Webflow, React, WordPress, Laravel/PHP",
          "Support 6 months",
          "Your project always be priority",
        ],
      },
      {
        title: "Premium",
        price: 59,
        features: [
          "Need your wireframe",
          "Design with Figma, Framer",
          "Implement with Webflow, React, WordPress, Laravel/PHP",
          "Support 6 months",
        ],
      },
    ],
  },
};

export const mainContactModuleProps = {
  socialTextsComponentProps: {
    socials: [
      {
        name: "Facebook",
      },
      {
        name: "Twitter",
      },
      {
        name: "LinkedIn",
      },
      {
        name: "Dribble",
      },
    ],
  },
  contactUsFormComponentProps: {
    onFinish,
  },
};

export const mainBlogModuleProps = {
  blogsComponentProps: {
    blogsContent: [
      {
        imageUrl: "/assets/blog1.jpg",
        title: "12 unique examples of portfolio websites.",
      },
      {
        imageUrl: "/assets/blog2.jpg",
        title: "Dealing with spring allergy symptoms.",
      },
      {
        imageUrl: "/assets/blog3.jpg",
        title: "Best wireframe tools for web designers.",
      },
    ],
  },
};

export const worksHeaderModuleProps = {
  navMenuListComponentProps,
};

export const worksContentModuleProps = {
  portfolioWorksComponentProps: {
    portfolios: [
      {
        imageUrl: "/assets/portfolio1.jpg",
        title: "GeekFolio Portfolio",
      },
      {
        imageUrl: "/assets/portfolio2.jpg",
        title: "Luxury Modern Website",
      },
      {
        imageUrl: "/assets/portfolio1.jpg",
        title: "GeekFolio Portfolio",
      },
      {
        imageUrl: "/assets/portfolio2.jpg",
        title: "Luxury Modern Website",
      },
      {
        imageUrl: "/assets/portfolio2.jpg",
        title: "Luxury Modern Website",
      },
      {
        imageUrl: "/assets/portfolio4.jpg",
        title: "From our gallery",
      },
    ],
  },
};
