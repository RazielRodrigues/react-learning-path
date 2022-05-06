import bugImageUrl from './../../assets/emoji.svg';
import otherImageUrl from './../../assets/emoji-1.svg';
import ideaImageUrl from './../../assets/emoji-2.svg';
import { useState } from 'react';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';

export const feedbackTypes = {
    BUG: {
        title: 'bug',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    OTHER: {
        title: 'outros',
        image: {
            source: otherImageUrl,
            alt: 'Imagem de interação'
        }
    },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    function handleRestartFeedback() {
        setFeedbackType(null);
    }

    return (
        <div 
        className="
        bg-zinc-900 p-4 relative rounded-2xl mb-4 flex 
        flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto
        ">

            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackContentStep
                    feedbackType={feedbackType}
                    onFeedbackRestartRequested={handleRestartFeedback}
                />
            )}

            <footer className="text-xs text-neutral-400">
                Feito por <a className="underline underline-offset-2" href="https://github.com/RazielMiranda">Raziel Rodrigues</a>
            </footer>

        </div>
    );
}