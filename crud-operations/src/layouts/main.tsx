// Libs
import { JSX, PropsWithChildren } from 'react';

// Layout
import { Header, SideBar } from '@components/index';

// Interfaces
interface MainProps extends PropsWithChildren {};

const Main = (({children}: MainProps): JSX.Element => {
    return (
        <div className="container">
            <aside className="side-bar">
                <SideBar />
            </aside>
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