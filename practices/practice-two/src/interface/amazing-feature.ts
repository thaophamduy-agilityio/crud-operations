export interface Feature {
  id: string;
  srcSet: {
    desktop: {
      img: string,
      img2x: string,
    },
    tablet: {
      img: string,
      img2x: string,
    },
  };
  imageSrc: {
    mobile: {
      img: string,
      img2x: string,
    },
  };
  iconSrc: {
    img: string,
    img2x: string,
  };
  title: string;
  desc: string;
  btnLabel: string;
  onClick: () => void;
}