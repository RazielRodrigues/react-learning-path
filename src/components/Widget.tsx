import { ChatTeardropDots } from "phosphor-react"
import { useState } from "react";
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

export function Widget() {

    const [isWidgetOpen, setIsWidgetOpen] = useState(false);

    function toggleWidgetVisibility() {
        setIsWidgetOpen(!isWidgetOpen);
    }


    return (
        <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col flex-end">

            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>

            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-6 h-6" />

                <span className="max-w-0 overflow-hidden group-hover:max-w-xs duration-500 ease-linear">
                    <span className="pl-2"></span>
                    Feedback
                </span>

            </Popover.Button>
        </Popover>
    )

    //! Usando com o state
    // return (
    //     <div className="absolute bottom-5 right-5">

    //         {isWidgetOpen && <p>Hello World</p>}

    //         <button onClick={toggleWidgetVisibility} className="bg-violet-500 rounded-full px-3 h-12 text-white flex items-center group">
    //             <ChatTeardropDots className="w-6 h-6"/>

    //             <span className="max-w-0 overflow-hidden group-hover:max-w-xs duration-500 ease-linear">
    //                 <span className="pl-2"></span>
    //                 Feedback
    //             </span>

    //         </button>
    //     </div>
    // )
}