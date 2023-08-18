// Libs
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import { Header } from "@components/Header";
import { Footer } from '@components/Footer';

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

  return (    
    <div className="container">
      <Header
        isOpenMenuOnMobile={isOpenMenuOnMobile}
        onToggleMenuOnMobile={toggleMenuOnMobile}
      />
      <Outlet />
      <Footer
        links={navLinkMock}
      />
    </div>
  );
}