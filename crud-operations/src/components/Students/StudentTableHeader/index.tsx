// Libs
import { JSX } from "react";

// Components
import { Button, IconButton, Text } from "@components/index";
import { SortIcon } from "@components/Icon";

//Interfaces
interface StudentTableHeaderProps {
    onToggleSort: () => void;
    onAdd: () => void;
}

const StudentTableHeader = ({ onToggleSort, onAdd }: StudentTableHeaderProps): JSX.Element =>
    <div className="table-header">
        <div className="table-header-left">
            <Text
                type="h2"
                size="2xl"
                additionalClasses="table-header-title"
            >
                Students List
            </Text>
        </div>
        <div className="table-header-right">
            <IconButton
                additionalClasses="icon-sort"
                onClick={onToggleSort}
            >
                <SortIcon />
            </IconButton>
            <Button
                label="Add new students"
                onClick={onAdd} />
        </div>
    </div>;
    
export default StudentTableHeader;