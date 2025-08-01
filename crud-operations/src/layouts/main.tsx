// Libs
import { JSX, ReactNode } from 'react';

// Layout
import { Header, SideBar } from '@components/index';

// Interfaces
interface MainProps {
    children: ReactNode;
};

const Main = (({children}: MainProps): JSX.Element => {
  return (
    <div className="container">
      <SideBar />
      <main>
        <Header 
          valueSearch=''
          onBack={(): void => {}}
          onSearchChange={(): void => {}}
          onToggleNotification={(): void => {}}
        />
        {children}
      </main>
    </div>
  );
});

export default Main;