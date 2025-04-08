"use client";

import { Input } from "@/app/_components/ui/input"
import { SearchIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";


const Search = () => {
    return ( 
        <div className="flex items-center gap-2">
            <Input  placeholder="Search for a barber-shop..." />
            <Button variant="default">
            <SearchIcon size={20}/>
            </Button>
        </div>
     );
}
 
export default Search;