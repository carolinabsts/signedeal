import { useEffect, useState } from 'react';

export function useDisplaySize() {
  const [widthSize, setWidthSize] = useState<any>(window.innerWidth);
  const [heightSize, setHeightSize] = useState<any>(window.innerHeight);

  useEffect(() => {
    if (window.innerWidth) {
      setWidthSize(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (window.innerHeight) {
      setHeightSize(window.innerHeight);
    }
  }, []);

  return {
    widthSize,
    heightSize,
  };
}