import { FeatureCards } from '@/components/FeatureCards/FeatureCards';
import { PoweredBy } from '@/components/PoweredBy/PoweredBy';
import { Snackbar } from '@/components/Snackbar/Snackbar';
import { SupportModal } from '@/components/SupportModal/SupportModal';
import { WelcomeScreen } from '@/components/WelcomeScreen/WelcomeScreen';
import { Widgets } from '@/components/Widgets/Widgets';
import type { StarterVariantType } from '@/types/internal';
import { WalletProvider } from 'src/providers/WalletProvider';

interface AppProps {
  starterVariant: StarterVariantType;
}

const App = ({ starterVariant }: AppProps) => {
  return (
    <WalletProvider>
      <WelcomeScreen />
      <Widgets widgetVariant={starterVariant} />
      <FeatureCards />
      <Snackbar />
      <SupportModal />
      <PoweredBy fixedPosition={true} />
    </WalletProvider>
  );
};

export default App;