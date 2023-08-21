// Libs
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import { Header } from "../Header";
import { Footer } from '../Footer';

// Mock
import {
  navLinkMock,
} from '@mocks/';

export const MainLayout = () => {
  const [isOpenMenuOnMobile, setIsOpenMenuOnMobile] = useState<boolean>(false);

  /**
   * Handle toggle show navigation on mobile
   * @param {function} toggleMenuOnMobile
   */
  const toggleMenuOnMobile = (): void => {
    setIsOpenMenuOnMobile(!isOpenMenuOnMobile);
  };

  /**
   * Handle on sign up
   * @param {function} onSignUp
   */
  const onSignUp = (): void => {
    // Sign up here
  };

  return (    
    <div className="container">
      <Header
        isOpenMenuOnMobile={isOpenMenuOnMobile}
        onToggleMenuOnMobile={toggleMenuOnMobile}
        onSignUp={onSignUp}
      />
      <Outlet />
      <Footer
        links={navLinkMock}
      />
    </div>
  );
}