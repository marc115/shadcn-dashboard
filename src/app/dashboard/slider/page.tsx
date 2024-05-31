"use client"

import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function Page() {
    const [sliderValue, setSliderValue] = useState(10)
    const [rangeValue, setRangeValue] = useState([10, 20])

    return (
        <div className="grid grid-cols-1 gap-3">
            <Slider
                defaultValue={[sliderValue]}
                max={100}
                step={1}
                onValueChange={(value: number[]) => setSliderValue(value[0])}
            />
            <span>Slider Value: {sliderValue}</span>

            <Slider
                defaultValue={rangeValue}
                max={100}
                step={1}
                onValueChange={(value: number[]) => setRangeValue(value)}
            />
            <span>Rango: {rangeValue.join(' - ')}</span>
        </div>
    )
}