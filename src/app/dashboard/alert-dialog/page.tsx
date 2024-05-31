"use client"

import { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function Page() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    return (
        <div className="flex flex-col gap-4">
            <AlertDialog 
                open={isDialogOpen}
                onOpenChange={setIsDialogOpen}>
                <AlertDialogTrigger asChild>
                    <Button variant="outline">Show Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => (console.log("cancelado"))}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => (console.log("aceptado"))}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <Button onClick={() => setIsDialogOpen(true)}>Open dialog</Button>
        </div>
    )
}