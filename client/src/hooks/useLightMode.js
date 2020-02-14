import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';







const useLightMode = () => {
  const [lightMode, SetLightMode] = useLocalStorage("light", true);
//   const toggleLightMode = event =>{
//     event.preventDefault();
//     return LightMode ? setLightMode(false) : setLightMode(true);
// }
    
  useEffect(() => {
    const page = window.document.body;
    lightMode ? page.classList.add('light-mode') : page.classList.remove('light-mode');
  }, [lightMode]);
  return [lightMode, SetLightMode /*toggleLightMode*/];
};

export default useLightMode;
