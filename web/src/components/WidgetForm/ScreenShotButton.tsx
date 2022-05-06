import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenShotButtonProps {
    screenshot: string | null;
    onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenShotButton({ onScreenshotTook, screenshot }: ScreenShotButtonProps) {

    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    async function handleTakeScreenShot() {
        setIsTakingScreenshot(true);

        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');

        onScreenshotTook(base64image);

        setIsTakingScreenshot(false);

    }

    if (screenshot) {
        return (
            <button
            type="button"
            className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400"
            onClick={() => onScreenshotTook(null)}
            style={{
                backgroundImage: `url(${screenshot})`,
                backgroundPosition: "right-bottom",
                backgroundSize: 100,
            }}
            >
                <Trash weight="fill" />
            </button>
        );
    }

    return (
        <button
            type="button"
            className="
                p-2 bg-zinc-500 rounded-md border-transparent 
                hover:bg-zinc-600 transition-colors duration-200 
                focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-offset-zinc-300 focus:ring-brand-500
            "
            onClick={handleTakeScreenShot}
            >
            {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 text-zinc-100" />}
        </button>
    );
}