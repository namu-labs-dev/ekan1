import Image from "next/image";

import "./custom.css";

type Props = {
  width: number;
  height: number;
  imageUrl: string;
  className?: string;
};

export function ImageIconAtom(props: Props) {
  return (
    <span
      className={`absolute flex h-10 w-10 rotate-[10deg] items-center justify-center rounded-xl backdrop-blur-[5px] ${props.className}`}
    >
      <Image
        src={props.imageUrl}
        alt=''
        width={props.width}
        height={props.height}
      />
    </span>
  );
}
