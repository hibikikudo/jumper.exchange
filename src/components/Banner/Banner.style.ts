import type { BoxProps } from '@mui/material';
import { Box } from '@mui/material';

import { styled } from '@mui/material/styles';

export const BannerContainer = styled(Box)<BoxProps>(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  fontWeight: 700,
  textAlign: 'center',
  padding: '10px',
  transition: 'height 2s ease, opacity 5s ease',
}));
