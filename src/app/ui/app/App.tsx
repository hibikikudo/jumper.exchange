import { FeatureCards } from '@/components/FeatureCards/FeatureCards';
import { Snackbar } from '@/components/Snackbar/Snackbar';
import { WelcomeScreen } from '@/components/WelcomeScreen/WelcomeScreen';
import { Widgets } from '@/components/Widgets/Widgets';
import type { StarterVariantType } from '@/types/internal';
export interface AppProps {
  starterVariant: StarterVariantType;
  welcomeScreenClosedCookie: boolean;
}

const App = ({ starterVariant, welcomeScreenClosedCookie }: AppProps) => {
  return (
    <>
      <WelcomeScreen closed={welcomeScreenClosedCookie} />
      <Widgets
        widgetVariant={starterVariant}
        closedWelcomeScreen={welcomeScreenClosedCookie}
      />
      <FeatureCards />
      <Snackbar />
    </>
  );
};

export default App;
