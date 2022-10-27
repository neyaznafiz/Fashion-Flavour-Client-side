import { useEffect, useState } from 'react'

function useLoading() {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
           setLoading(false) 
        }, 2500);
    }, [])

    return [loading, setLoading]
}

export default useLoading
