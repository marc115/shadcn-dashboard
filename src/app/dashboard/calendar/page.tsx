"use client"

import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export default function Page() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([])

    const smalldate = date?.toLocaleDateString("es-ES", {
        weekday: "short",
        day: "numeric",
        month: "short"
    }

    )

    return (
        <div className="flex flex-col gap-4 sm:flex-row">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
            />
            <Calendar
                mode="multiple"
                selected={multipleDates}
                onSelect={setMultipleDates}
                className="rounded-md border"
                disabled={(date) => date > new Date()}
            />
            <div>
                <h1 className="text-3xl">Información</h1>
                <div className="border-b"></div>
                <p>{smalldate}</p>
            </div>
        </div>
    )
}