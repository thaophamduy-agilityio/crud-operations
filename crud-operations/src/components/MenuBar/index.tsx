// Libs
import { useState, type JSX } from "react";
import clsx from 'clsx';

// Components
import { IconButton } from "@components";

// Icons
import { HomeIcon } from "../Icon";

//Interfaces
import { IMenuBar } from "@interface/menu-bar";

interface MenuBarProps {
    menuBarList: IMenuBar[];
}

const MenuBar = ({ menuBarList }: MenuBarProps): JSX.Element => {
    const [selectedId, setSelectedId] = useState<number>(1);
    const renderListMenuBar = (): JSX.Element[] => {
        return menuBarList?.map((item) => (
        <li
            key={item.id}
            className='menu-item'
            onClick={() => setSelectedId(item.id)}
        >
            <IconButton 
                additionalClasses={clsx('icon', `${item.id === selectedId ? 'selected' : ''}`)}
            >
                <div className="icon-container">
                    {item.icon || <HomeIcon />}
                    <span>{item.name}</span>
                </div>
            </IconButton>
        </li>
        ));
    };
    return (
        <ul className="menu-bar">{renderListMenuBar()}</ul>
    );
}

export default MenuBar;