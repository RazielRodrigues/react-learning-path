import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // lidar com vazamento de memoria
    const [cancelled, setCancelled] = useState(null)

    const auth = getAuth();

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }


    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            return user

        } catch (error) {
            console.error(error.message)
            console.error(typeof error.message)
        }

        setLoading(false)
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])


    return {
        auth,
        createUser,
        error,
        loading
    }

}