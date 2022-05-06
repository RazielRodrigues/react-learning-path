import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from '..';
import { ArrowLeft } from "phosphor-react";
import { ScreenShotButton } from './../ScreenShotButton';
import { useState, FormEvent } from "react";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType,
    onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested }: FeedbackContentStepProps) {

    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState<string>('')

    const feedbackTypesInfo = feedbackTypes[feedbackType];

    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();
        console.log({
            screenshot,
            comment
        })
    }

    return (
        <>
            <header>

                <button
                    type="button"
                    className="top-5 left-6 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestartRequested}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img
                        src={feedbackTypesInfo.image.source}
                        alt={feedbackTypesInfo.image.alt}
                        className="w-6 h-6"
                    />
                    {feedbackTypesInfo.title}
                </span>

                <CloseButton />
            </header>

            <form onSubmit={handleSubmitFeedback} className=" my-4 w-full">
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus-ring-1 resize-none focus:outline-none scrollbar  scrollbar-thumb-zinc-700
                scrollbar-track-transparent scrollbar-thin
                "
                    placeholder="Conte com detalhes o que está acontecendo..."
                    onChange={event => setComment(event.target.value)}
                />

                <footer className="flex gap-2 mt-2">

                    <ScreenShotButton 
                    screenshot={screenshot}
                    onScreenshotTook={setScreenshot} 
                    />

                    <button
                        type="submit"
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-300 focus:ring-brand-500 transition-colors duration"
                    >
                        Enviar feedback
                    </button>

                </footer>

            </form>
        </>
    );
}