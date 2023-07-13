import { Button } from '@components/common/Button/index';

interface ThemeProps {
  isChangeDarkTheme: boolean;
  toggleThemePage: () => void;
}

const DarkTheme = ({ isChangeDarkTheme, toggleThemePage }: ThemeProps): JSX.Element => {
  return (
    <Button
      className={`btn btn-sunshine ${isChangeDarkTheme ? '' : 'dark'}`}
      onClick={toggleThemePage}
    />
  );
};

export default DarkTheme;
