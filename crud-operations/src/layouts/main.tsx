// Libs
import { JSX, PropsWithChildren } from 'react';

// Layout
import { Header } from '@layouts/';

// Interfaces
interface MainProps extends PropsWithChildren {};

const Main = (({children}: MainProps): JSX.Element => {
    return (
        <main>
            <Header 
                valueSearch={''}
                onBack={(): void => {}}
                onSearchChange={(): void => {}}
                onToggleNotification={(): void => {}}
            />
            {children}
        </main>
    );
});

export default Main;