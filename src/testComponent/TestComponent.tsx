import { useEffect, useState } from 'react';

import cls from './TestComponent.module.css';

type Props = {
  prop: string;
};

export const TestComponent = ({ prop }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
      setIsLoading(true);
    }
  }, [isLoading]);
  return <div>Test component!</div>;
};
