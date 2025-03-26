import path from 'path';

import React from 'react';

import { TestComponent } from '@/testComponent/TestComponent';

import { Button } from '../shared/ui/Button/Button';
import './styles/index.css';

// interface Props {}

export const App = () => {
  return (
    <div>
      <TestComponent prop="TestProp" />
    </div>
  );
};
