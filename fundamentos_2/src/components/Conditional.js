import { useState } from 'react';

const Conditional = () => {

    const [auth] = useState(false);
    const [name] = useState('RAZIEL');


    return (
        <div>
            <div>
                {auth && <p> AUTENTICADO</p>}
                {!auth && <p> NÃO AUTENTICADO</p>}


                {

                    name === 'RAZIEL' ? (
                        <div>
                            É O RZ NIGHT
                        </div>
                    ) :
                        (
                            <div>
                                NÃO É O RAZIEL
                            </div>
                        )

                }

            </div>
        </div>
    )
}

export default Conditional;