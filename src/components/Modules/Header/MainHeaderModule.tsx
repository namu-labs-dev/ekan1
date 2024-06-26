import { motion } from "framer-motion";

import { SocialIconsComponent } from "~/components/Components/SocialIconsComponent/SocialIconsComponent";
import { NavMenuListComponent } from "~/components/Components/NavMenuListComponent/NavMenuListComponent";
import { NavContactToggleComponent } from "~/components/Components/NavContactToggleComponent/NavContactToggleComponent";
import { LogoAtom } from "~/components/Atoms/LogoAtom/LogoAtom";

type Props = {
  SocialIconsComponentProps: React.ComponentProps<typeof SocialIconsComponent>;
  navMenuListComponentProps: React.ComponentProps<typeof NavMenuListComponent>;
  navContactToggleComponentProps: React.ComponentProps<
    typeof NavContactToggleComponent
  >;
  isNavOpen: boolean;
};

export function MainHeaderModule(props: Props) {
  const variants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className='flex flex-1 items-center justify-between'>
      <LogoAtom />

      <div>
        <motion.div
          initial='hidden'
          animate={props.isNavOpen ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "tween", ease: "easeInOut" }}
          className='absolute right-0 top-0 mt-0 w-full border-b-2 border-solid border-b-[--border] bg-[--background2] pb-10 pt-20 lg:hidden'
        >
          <NavMenuListComponent {...props.navMenuListComponentProps} />
        </motion.div>

        <div className='hidden lg:block'>
          <SocialIconsComponent {...props.SocialIconsComponentProps} />
        </div>
      </div>

      <NavContactToggleComponent {...props.navContactToggleComponentProps} />
    </div>
  );
}
