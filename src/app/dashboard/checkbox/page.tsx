"use client"

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

export default function Page() {
    const [terms, setTerms] = useState(false)

    return (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms1"
                checked={terms}
                onCheckedChange={(value: boolean) => setTerms(value)}            
            />
            <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Accept terms and conditions
            </label>
            {
                (terms) 
                ? <Badge>Great!</Badge>
                : <Badge variant='destructive'>fuck no</Badge>
            }
        </div>
    )   
}