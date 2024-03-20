//
//
import { useState, useEffect } from 'react'


import { test_get } from '../service/test'

const TestPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState(null)

    const fetchTest = async () => {
        setIsLoading(true)
        try {
            const { payload } = await test_get()
            console.log(payload)
            setData(payload)

        } catch(err) {
            setIsError(err)
        }
        setIsLoading(false)
    }
    useEffect(() => {
        fetchTest()
    }, [])

    return (
        <>
            <h1>Test Page</h1>
            <h2>project tracking & dashboard</h2>
            { data && JSON.stringify(data) }
        </>
    )
}

export default TestPage
