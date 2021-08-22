import { useEffect, useState } from 'react';

export const useObserve = (targetRef, options) => {
  const [visible, setVisible]=useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setVisible(true);
    }
  };

  useEffect(() => {
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
  return visible
}
 