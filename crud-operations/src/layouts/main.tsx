// Libs
import { JSX, PropsWithChildren } from 'react';

// Layout
import { Header, SideBar } from '@components/';

// Interfaces
interface MainProps extends PropsWithChildren {};

const Main = (({children}: MainProps): JSX.Element => {
    return (
        <>
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
        </>
    );
});

export default Main;