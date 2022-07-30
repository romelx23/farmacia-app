import { useEffect, useState } from "react"
import { pharmacyApi } from "../../api"
import { UserI } from "../../interfaces"

export const useUser = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const createLogin = async () => {
        try {
            const response = await pharmacyApi.post<UserI>('/auth/login')
            setUser(response.data)
            setLoading(false)
        } catch (error:any) {
            setError(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        createLogin()
    }, [])

    return { user, loading, error }
}