// import styles from './LoginPage.module.css';

import useLocalStorage from '@/shared/hooks/useLocaleStorage';

interface LoginPageProps {
  className?: string;
}

const LoginPage = (props: LoginPageProps) => {
  const [value, setValue, removeValue] = useLocalStorage('token', '');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue('test_token123');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="E-mail" />
        <input type="text" name="password" placeholder="Пароль" />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;
