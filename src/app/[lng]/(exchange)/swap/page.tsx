import { getCookies } from '@/app/lib/getCookies';
import App from '@/app/ui/app/App';

export const dynamic = 'force-dynamic';

const Page = async () => {
  const { welcomeScreenClosed } = getCookies();

  return (
    <App
      starterVariant="default"
      welcomeScreenClosedCookie={welcomeScreenClosed === 'true' ? true : false}
    />
  );
};

export default Page;
