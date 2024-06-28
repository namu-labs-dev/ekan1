import { useTitle } from "~/hooks/useTitle";
import { MainTemplate } from "~/components/Templates/Main/MainTemplate";
import {
  utilityModulesProps,
  mainHeaderModuleProps,
  mainHeroModuleProps,
  mainAboutModuleProps,
  mainServicesModuleProps,
  mainDarkPortfolioModuleProps,
  mainPricingModuleProps,
  mainContactModuleProps,
  mainBlogModuleProps,
} from "~/utils/data";

import "~/styles/dark.css";

export const MainDarkContainer = () => {
  useTitle("Gavi - Dark");

  const mainTemplateProps: React.ComponentProps<typeof MainTemplate> = {
    buttonThemeProps: {
      defaultActiveBorderColor: "#ffffff",
      defaultActiveColor: "#000000",
      defaultHoverBorderColor: "#ffffff",
      defaultHoverColor: "#000000",
      defaultHoverBg: "#ffffff",
    },
    inputThemeProps: {
      activeBg: "transparent",
      hoverBg: "transparent",
      hoverBorderColor: "none",
      activeBorderColor: "white",
      colorTextPlaceholder: "#ffffff33",
      colorText: "#ffffff",
    },
    mainUtilityModulesProps: utilityModulesProps,
    mainHeaderModuleProps,
    mainHeroModuleProps,
    mainServicesModuleProps,
    mainAboutModuleProps,
    mainPortfolioModuleProps: mainDarkPortfolioModuleProps,
    mainPricingModuleProps,
    mainContactModuleProps,
    mainBlogModuleProps,
  };

  return <MainTemplate {...mainTemplateProps} />;
};
