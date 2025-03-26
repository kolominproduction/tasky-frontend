import cls from './TestComponent.module.css';

type Props = {
  prop: string;
};

export const TestComponent = ({ prop }: Props) => {
  return <div>Test component!</div>;
};
