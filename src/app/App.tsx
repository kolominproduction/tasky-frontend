import { TestComponent } from '@/testComponent/TestComponent';
import { Button } from '@/shared/ui/Button';

import './styles/index.css';

// interface Props {}

export const App = () => {
  return (
    <div>
      <TestComponent prop="TestProp" />
      <Button />
    </div>
  );
};
