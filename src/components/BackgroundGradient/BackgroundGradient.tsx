'use client';
import { useColorScheme, type CSSObject } from '@mui/material';
import {
  BackgroundGradientBottomLeft,
  BackgroundGradientBottomRight,
  BackgroundGradientContainer,
  BackgroundGradientTopCenter,
} from '.';

interface BackgroundGradientProps {
  styles?: CSSObject;
}

export const BackgroundGradient = ({ styles }: BackgroundGradientProps) => {
  const { mode, setMode } = useColorScheme();
  console.log('MODE', mode);
  return (
    <BackgroundGradientContainer mode={mode || 'light'}>
      <BackgroundGradientBottomLeft />
      <BackgroundGradientBottomRight />
      <BackgroundGradientTopCenter />
    </BackgroundGradientContainer>
  );
};
