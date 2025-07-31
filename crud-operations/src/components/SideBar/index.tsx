// Libs
import { JSX } from 'react';

// Components
import { IconButton, Logo, StudentInfo, MenuBar } from '@components/index';

// Icons
import { LogoutIcon } from '@components/Icon';

// Mocks
import { menuBarList } from '@mocks/index';

const SideBar = (): JSX.Element => {
    return (
        <>
            <div className='side-bar-container'>
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
            </div>
            <IconButton
                onClick={() => {}}
                additionalClasses="icon"
            >
                <div className="icon-container right">
                    <LogoutIcon />
                    <span>Logout</span>
                </div>
            </IconButton>
        </>
    );
}

export default SideBar;