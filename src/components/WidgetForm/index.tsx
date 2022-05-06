import bugImageUrl from './../../assets/emoji.svg';
import ideaImageUrl from './../../assets/emoji-1.svg';
import otherImageUrl from './../../assets/emoji-2.svg';
import { useState } from 'react';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
    BUG: {
        title: 'Bug',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    OTHER: {
        title: 'Outros',
        image: {
            source: otherImageUrl,
            alt: 'Imagem de interação'
        }
    },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackContentSent, setFeedbackContentSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackContentSent(false);
        setFeedbackType(null);
    }

    return (
        <div 
        className="
        bg-zinc-900 p-4 relative rounded-2xl mb-4 flex 
        flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto
        ">

            { feedbackContentSent ? (
                < FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackContentSent(true)}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito por <a className="underline underline-offset-2" href="https://github.com/RazielMiranda">Raziel Rodrigues</a>
            </footer>

        </div>
    );
}