'use client';
import { useSettingsStore } from '@/stores/settings';
import type { ThemeModesSupported } from '@/types/settings';
import { getInitColorSchemeScript, useMediaQuery } from '@mui/material';
import type { PropsWithChildren } from 'react';

export const useDetectMode = () => {
  const themeMode = useSettingsStore((state) => state.themeMode);
  const isDarkModeHook = useMediaQuery('(prefers-color-scheme: dark)');

  if (themeMode === 'dark') {
    return 'dark';
  } else if (themeMode === 'light') {
    return 'light';
  } else {
    return isDarkModeHook ? 'dark' : 'light';
  }
};

export const ThemeProvider: React.FC<
  PropsWithChildren<{ theme?: ThemeModesSupported | 'auto' }>
> = ({ children }) => {
  const themeMode = useDetectMode();
  // const [theme, setTheme] = useState<ThemeModesSupported | undefined>(
  //   themeProp,
  // );
  // const isDarkMode = useDetectDarkModePreference();
  // useEffect(() => {
  //   // Check if the theme prop is not provided (null or undefined)
  //   if (theme === undefined) {
  //     setTheme(isDarkMode ? 'dark' : 'light');
  //   }
  // }, [theme, isDarkMode]);

  // // Update the theme whenever themeMode changes
  // useEffect(() => {
  //   if (themeMode === 'auto') {
  //     setTheme(isDarkMode ? 'dark' : 'light');
  //   } else {
  //     setTheme(themeMode === 'dark' ? 'dark' : 'light');
  //   }
  // }, [themeMode, isDarkMode]);

  // const activeTheme = theme === 'dark' ? darkTheme : lightTheme;

  // Render children only when the theme is determined
  return (
    <>
      {getInitColorSchemeScript({
        colorSchemeStorageKey: 'mui-mode',
        modeStorageKey: 'mui-mode',
        defaultMode: themeMode,
      })}
      {children}
    </>
  );
};
