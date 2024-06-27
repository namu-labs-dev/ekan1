import { useTitle } from "~/hooks/useTitle";
import { WorksTemplate } from "~/components/Templates/Works/WorksTemplate";
import {
  utilityModulesProps,
  worksHeaderModuleProps,
  worksContentModuleProps,
} from "~/utils/data";

import "~/styles/light.css";

export const WorksLightContainer = () => {
  useTitle("Gavi - Light");

  const worksTemplateProps: React.ComponentProps<typeof WorksTemplate> = {
    worksUtilityModulesProps: utilityModulesProps,
    worksHeaderModuleProps,
    worksContentModuleProps,
  };

  return <WorksTemplate {...worksTemplateProps} />;
};