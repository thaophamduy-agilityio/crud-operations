export interface ItemFeature {
  classItem: string;
  srcSet?: {
    desktop: {
      img: string,
      img2x: string,
    },
    tablet: {
      img: string,
      img2x: string,
    },
  };
  imageSrc?: {
    mobile: {
      img: string,
      img2x: string,
    },
  };
  imageSize?: {
    width: number;
    height: number;
  };
  isLogoIntegration?: boolean;
  subTitle: string;
  title: string;
  desc: string;
  labelButton?: string;
  onClick?: () => void;
}