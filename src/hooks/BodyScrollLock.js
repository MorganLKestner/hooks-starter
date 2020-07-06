import { useLayoutEffect } from 'react';

function useBodyScrollLock() {
  useLayoutEffect(() => {
    const orginalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    
    // You can do this do
    // this is how you remove or destory the effects
    // did component unmount
    //return function cleanup() {
    return () => {
      document.body.style.overflow = orginalOverflow;
    }

    // the array [] ensures it only gets run once
    // only fires on mount and the return runs on unmount once
  }, [])
}

export { useBodyScrollLock }