import { useEffect } from 'react';

export const useObserve = (targetRef, callback, options) => {

    return useEffect(() => {
        const current = targetRef.current;
        const observer = new IntersectionObserver(callback, options);
        if (current) {
          observer.observe(current);
        }
    
        return () => {
          if (current) {
            observer.unobserve(current);
          }
        };
      }, [targetRef, options, callback]);;
}
 