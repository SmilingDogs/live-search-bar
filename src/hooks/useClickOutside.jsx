import { useEffect } from 'react';

function useClickOutside(ref, handler) {
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Do nothing if clicking ref's element or descendent elements

      if (
        !ref?.current?.contains(e.target) &&
        e.target.className.indexOf('react-switch') === -1 &&
        handler
      ) {
        handler(e);
      }
    };

    document.addEventListener('mousedown', handleClickOutside, true);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [ref, handler]);

  // Add ref and handler to effect dependencies
  // It's worth noting that because passed in handler is a new ...
  // ... function on every render that will cause this effect ...
  // ... callback/cleanup to run every render. It's not a big deal ...
  // ... but to optimize you can wrap handler in useCallback before ...
  // ... passing it into this hook.
}

export default useClickOutside;
