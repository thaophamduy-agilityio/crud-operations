// Libs
import { JSX } from 'react';

// Components
import { IconButton, Logo, StudentInfo, MenuBar } from '@components/';

// Icons
import { LogoutIcon } from '@components/Icon';

// Mocks
import { menuBarList } from '@mocks/index';

const SideBar = (): JSX.Element => {
    return (
        <aside className="side-bar">
            <Logo
                label="Students Dashboard" />
            <StudentInfo
                fullName="Karthi Madesh"
                role="Admin"
                avatarUrl="https://i.pravatar.cc/150?img=12"
                size={{ width: 128, height: 128 }} />
            <nav>
                <MenuBar
                    menuBarList={menuBarList} />
            </nav>
            <IconButton
                onClick={() => {}}
                additionalClasses="icon"
            >
                <div className="icon-container right">
                    <LogoutIcon />
                    <span>Logout</span>
                </div>
            </IconButton>
        </aside>
    );
}

export default SideBar;