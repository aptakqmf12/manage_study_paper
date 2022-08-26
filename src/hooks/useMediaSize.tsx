import { useMediaQuery } from 'react-responsive';

const useMediaSize = () => {
  const isPc = useMediaQuery({
    query: '(min-width:1280px)',
  });

  const isTablet = useMediaQuery({
    query: '(min-width:1024px) and (max-width:1280px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width:1024px)',
  });

  return {
    isPc,
    isTablet,
    isMobile,
  };
};

export default useMediaSize;
