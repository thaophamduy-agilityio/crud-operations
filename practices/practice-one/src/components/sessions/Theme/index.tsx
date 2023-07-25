import { Icon } from '@components/common/Icon';

interface ThemeProps {
  isChangeDarkTheme: boolean;
  toggleThemePage: () => void;
}

const DarkTheme = ({ isChangeDarkTheme, toggleThemePage }: ThemeProps): JSX.Element => {
  return (
    <Icon
      className={`icon icon-sunshine ${isChangeDarkTheme ? '' : 'dark'}`}
      onClick={toggleThemePage}
      aria-label="Change Dark Theme"
    />
  );
};

export default DarkTheme;
