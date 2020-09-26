import React from 'react';
import isBrowser from '../isBrowser'; // useLayoutEffect() produces a warning with SSR rendering
// https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a

var useIsomorphicLayoutEffect = isBrowser() && process.env.NODE_ENV !== 'test' ? React.useLayoutEffect : React.useEffect;
export default useIsomorphicLayoutEffect;