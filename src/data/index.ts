import { type SocialLinks } from "~/components/Components/SocialsComponent/SocialsComponent";

const socialsComponentProps = {
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

export const navMenuListComponentProps = {
  navItems: [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Services",
      link: "#",
      scrollToIndex: 1,
    },
    {
      name: "About",
      link: "#",
      scrollToIndex: 2,
    },
    {
      name: "Portfolio",
      link: "#",
      scrollToIndex: 3,
    },
    {
      name: "Price",
      link: "#",
      scrollToIndex: 4,
    },
    {
      name: "Contact",
      link: "#",
      scrollToIndex: 5,
    },
    {
      name: "Blog",
      link: "#",
      scrollToIndex: 6,
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
  linesComponentProps: { numberOfLines: 5 },
};

export const mainHeaderModuleProps = {
  socialsComponentProps,
  navMenuListComponentProps,
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
          className: "-left-5 top-[2rem]",
        },
        {
          width: 24,
          height: 24,
          imageUrl: "/assets/icon2.png",
          className: "-right-5 top-[40%]",
        },
        {
          width: 24,
          height: 24,
          imageUrl: "/assets/icon3.png",
          className: "left-5 bottom-8",
        },
      ],
    },
    socialsComponentProps,
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
