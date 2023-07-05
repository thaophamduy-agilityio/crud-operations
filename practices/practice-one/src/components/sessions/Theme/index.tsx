import { Button } from '@components/common/Button/index';

interface ThemeProps {
  isChangeDarkTheme: boolean;
  toggleThemePage: () => void;
}

const DarkTheme = ({ isChangeDarkTheme, toggleThemePage }: ThemeProps) => {
  return (
    <Button
      className={`${isChangeDarkTheme ? 'btn btn-sunshine' : 'btn btn-sunshine dark'}`}
      onClick={toggleThemePage}
    />
  );
};

export default DarkTheme;
