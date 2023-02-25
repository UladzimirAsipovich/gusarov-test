import { useState, useCallback } from 'react';
import FsLightbox from 'fslightbox-react';

type T_LiteBox = (sourceList: string[]) => {
  openLightboxOnSlide: (number: number) => void;
  LiteboxComponent: JSX.Element;
};

type T_LightboxController = {
  toggler: boolean;
  slide: number;
};

const useLightBox: T_LiteBox = (sourceList) => {
  const [lightboxController, setLightboxController] =
    useState<T_LightboxController>({
      toggler: false,
      slide: 1,
    });

  const openLightboxOnSlide = useCallback(
    (number: number): void => {
      setLightboxController({
        toggler: !lightboxController.toggler,
        slide: number,
      });
    },
    [lightboxController.toggler]
  );

  return {
    openLightboxOnSlide,
    LiteboxComponent: (
      <FsLightbox
        toggler={lightboxController.toggler}
        slide={lightboxController.slide}
        sources={sourceList}
        key={lightboxController.slide}
      />
    ),
  };
};

export default useLightBox;
