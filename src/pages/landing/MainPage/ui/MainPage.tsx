// import styles from './MainPage.module.css';

import { Link } from 'react-router';

import { ROUTES } from '@/shared/config/router/routes';

interface MainPageProps {
  className?: string;
}

const MainPage = (props: MainPageProps) => {
  return (
    <div>
      <h1>Transform the way teamwork gets done</h1>
      <Link to={ROUTES.auth.signin.path}>Войти</Link>
    </div>
  );
};

export default MainPage;
