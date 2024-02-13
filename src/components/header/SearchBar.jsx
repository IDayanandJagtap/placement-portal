import { Input } from "@chakra-ui/react";
import React from "react";

const SearchBar = () => {
    return (
        <div>
            <Input
                type="text"
                placeholder="Search..."
                variant={"flushed"}
                w={["xs", "xs", "sm", "md"]}
            />
        </div>
    );
};

export default SearchBar;
