'use client';
import { CssBaseline, useMediaQuery } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { useSettingsStore } from 'src/stores/settings';
import { darkTheme, lightTheme } from 'src/theme/theme';

export const useDetectDarkModePreference = () => {
  const themeMode = useSettingsStore((state) => state.themeMode);

  const isDarkModeHook = useMediaQuery('(prefers-color-scheme: dark)');
  if (!themeMode || themeMode === 'auto') {
    return isDarkModeHook;
  } else if (themeMode === 'dark') {
    return true;
  } else {
    return false;
  }
};

export const ThemeProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const isDarkMode = useDetectDarkModePreference();

  const activeTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true, key: 'css' }}>
      <MuiThemeProvider theme={activeTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
};
