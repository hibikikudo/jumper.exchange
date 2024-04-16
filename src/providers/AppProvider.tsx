import { ThemeProvider } from '@/providers/ThemeProvider';
import type { Resource } from 'i18next';
import { type PropsWithChildren } from 'react';
import { Layout } from 'src/Layout';
import { defaultNS } from 'src/i18n';
import { TrackingProvider } from './TrackingProvider';
import TranslationsProvider from './TranslationProvider';

interface AppProviderProps {
  children: React.ReactNode | JSX.Element;
  i18nResources: Resource;
  lang?: string;
}

export const AppProvider: React.FC<PropsWithChildren<AppProviderProps>> = ({
  children,
  i18nResources,
  lang,
}) => {
  return (
    <ThemeProvider>
      <TrackingProvider>
        <TranslationsProvider
          namespaces={[defaultNS]}
          locale={lang}
          resources={i18nResources}
        >
          <Layout>{children}</Layout>
        </TranslationsProvider>
      </TrackingProvider>
    </ThemeProvider>
  );
};
