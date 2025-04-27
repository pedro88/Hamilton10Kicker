"use client";

import React, { FC, useEffect } from "react";
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
import { FieldError } from "react-hook-form";

type SelectCountryProps = {
    onSelectCountry: (name: string) => void;
    data: string[];
    value?: string;
    reject?: FieldError;
};

const SelectCountry: FC<SelectCountryProps> = ({
    onSelectCountry,
    data,
    value: externalValue,
    reject,
}) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const countryData = data;

    useEffect(() => {
        if (externalValue !== undefined) {
            setValue(externalValue);
        }
    }, [externalValue]);

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
                    className={
                        reject
                            ? "w-64 rounded p-1 justify-between border-red-500"
                            : "w-64 rounded p-1 justify-between"
                    }
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
