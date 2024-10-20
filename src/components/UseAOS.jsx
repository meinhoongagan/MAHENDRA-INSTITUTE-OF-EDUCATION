import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const UseAOS = (config = {}) => {
  useEffect(() => {
    AOS.init(config);

    // Refresh AOS on window resize
    window.addEventListener('resize', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, [config]);
};

export default UseAOS;