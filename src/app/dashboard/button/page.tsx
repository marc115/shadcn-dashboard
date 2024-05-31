import { Button, } from "@/components/ui/button";
import { ArrowBigDown, Loader2, Mail } from "lucide-react";

export default function Page() {
    return (
        <div className="grid grid-cols-5 gap-2">
            <Button>Default</Button>
            <Button variant='destructive'>Destructive</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button variant='link'>Link</Button>
            <Button variant='outline'>outline</Button>
            <Button variant='secondary'>secondary</Button>
            <Button disabled>disabled</Button>
            <Button variant='success'>success</Button>
            <Button>{<ArrowBigDown />}</Button>
            <Button variant='success'>
                <Mail className="mr-2 h-4 w-4" /> Login with Email
            </Button>
            <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
            </Button>

        </div>
    )
}