import html2canvas from "html2canvas";
import Camera from "phosphor-react/dist/icons/Camera";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenShotButtonProps {
    onScreenshotTook: (screenshot: string) => void;
}

export function ScreenShotButton({onScreenshotTook}: ScreenShotButtonProps) {

    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    async function handleTakeScreenShot(){
        
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');
        
        onScreenshotTook(base64image);
        setIsTakingScreenshot(false);
    }

    return (
        <button
        type="button"
        className="p-2 bg-zinc-500 rounded-md border-transparent hover:bg-zinc-600 transition-colors duration-200 
        
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-300 focus:ring-brand-500
        "
        >
            { isTakingScreenshot ? <Loading /> :  <Camera className="w-6 h-6 text-zinc-100" /> }
        </button>
    );
}