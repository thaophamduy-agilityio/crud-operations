// Components
import { IconButton } from "@components/IconButton";
import { SortIcon } from "@components/Icon";
import { Button } from "@components/Button";
import { Text } from "@components/Text";

//Interfaces
interface TableHeaderProps {
    onToggleSort: () => void;
    onAddItem: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const TableHeader = ({ onToggleSort, onAddItem }: TableHeaderProps): void => {
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
                onClick={onAddItem}
            />
        </div>
    </div>
}