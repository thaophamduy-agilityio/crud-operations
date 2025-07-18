// Libs
import type { ChangeEvent, JSX } from "react";

// Components
import { Input, IconButton } from "@components/";
import { BackIcon, NotificationIcon } from "@components/Icon";

//Interfaces
interface HeaderProps {
    valueSearch: string;
    onBack: () => void;
    onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onToggleNotification: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Header = ({ valueSearch, onBack, onSearchChange, onToggleNotification }: HeaderProps): JSX.Element => {
    return (
        <header className="header">
            <div className="header-left">
                <IconButton
                    additionalClasses="icon-back"
                    onClick={onBack}
                >
                    <BackIcon />
                </IconButton>
            </div>
            <div className="header-right">
                <Input
                    type="search"
                    name="search"
                    id="search"
                    placeholder='Search ...'
                    additionalClasses="input input-search"
                    value={valueSearch}
                    onChange={onSearchChange}
                />
                <IconButton
                    additionalClasses="icon-notification"
                    onClick={onToggleNotification}
                >
                    <NotificationIcon />
                </IconButton>
            </div>
        </header>
    );
}

export default Header;