// Libs
import type { JSX } from "react";

// Components
import { Input, IconButton } from "@components/index";
import { BackIcon, NotificationIcon } from "@components/Icon";

//Interfaces
interface HeaderProps {
    valueSearch: string;
    onBack: () => void;
    onSearchChange: (valueSearch: string) => void;
    onToggleNotification: () => void;
}

const Header = ({ valueSearch, onBack, onSearchChange, onToggleNotification }: HeaderProps): JSX.Element => {
    const handleSearchChange = () => {
        onSearchChange(valueSearch);
    }
    
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
                    onChange={handleSearchChange}
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