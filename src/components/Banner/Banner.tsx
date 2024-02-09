import { Slide } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useBanner } from 'src/hooks/useBanner';
import { useSettingsStore } from 'src/stores';
import { Transition } from 'react-transition-group';
import { BannerContainer } from './Banner.style';

export const Banner = () => {
  const theme = useTheme();

  // Check if there is a customer banner; if it is the case we don't show the other
  const { banner, url, isSuccess } = useBanner();

  const imageUrl = url.origin + banner?.attributes.Image.data.attributes.url;
  const backgroundColor = null ?? 'rgb(101 0 254 / 10%)';

  //
  return (
    <BannerContainer
      sx={{
        height: isSuccess ? '40px' : '0px',
        opacity: isSuccess ? 1 : 0,
        background: backgroundColor,
      }}
    >
      {banner ? (
        <>
          {banner?.attributes?.Title}
          <img
            alt=""
            width={24}
            height={24}
            style={{ marginLeft: 8 }}
            src={imageUrl ?? ''}
          />
        </>
      ) : null}
    </BannerContainer>
  );

  banner ? (
    // <Slide
    //   direction="down"
    //   in={isSuccess}
    //   unmountOnExit
    //   appear={true}
    //   timeout={2000}
    //   easing={'cubic-bezier(0.32, 0, 0.67, 0)'}
    // >
    <>
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: isSuccess ? '44px' : '0px',
          textAlign: 'center',
          padding: '10px',
          background: backgroundColor,
          fontWeight: 700,
          transition: 'height 10s ease',
        }}
      >
        {banner?.attributes?.Title}
        <img
          alt=""
          width={24}
          height={24}
          style={{ marginLeft: 8 }}
          src={imageUrl ?? ''}
        />
      </div>
      <Transition in={isSuccess} timeout={1000}>
        {(state) => (
          <div
            style={{
              backgroundColor: 'red',
              transition: 'opacity 10s ease-in-out',
              opacity: state === 'entered' ? 1 : 0,
            }}
          >
            Hello, World!
          </div>
        )}
      </Transition>
    </>
  ) : // </Slide>
  null;
};
