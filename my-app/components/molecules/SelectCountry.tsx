"use client";

import React, { FC } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

type SelectCountryProps = {
    onSelectCountry: (name: string) => void;
    data: string[];
};

const SelectCountry: FC<SelectCountryProps> = ({ onSelectCountry, data }) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    const countryData = data;

    const handleSelect = (val: string) => {
        setValue(val);
        onSelectCountry(val);
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? countryData.find((country) => country === value)
                        : "Select country..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search country..." />
                    <CommandList>
                        <CommandEmpty>No country found.</CommandEmpty>
                        <CommandGroup>
                            {countryData.map((country) => (
                                <CommandItem
                                    key={country}
                                    value={country}
                                    onSelect={(currentValue) => {
                                        handleSelect(
                                            currentValue === value
                                                ? ""
                                                : currentValue
                                        );
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === country
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                    {country}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default SelectCountry;
