import { axiosInstance, setAccessToken } from "@/shared/lib/axiosInstance";
import { User } from "../model";


export class UserServices {
    static async refreshAccessToken(): Promise<{
        accessToken: string, 
        user: User
    }> {
        const response = await axiosInstance.get('/tokens/refresh')
        setAccessToken(response.data.accessToken)
        return response.data
    }

    static async signIn(
        email: string,
        password: string
    ): Promise<{accessToken: string, user: User}> {
        const response = await axiosInstance.post('/auth/signin', {
            email,
            password
        })
        setAccessToken(response.data.accessToken)
        return response.data
    }

    static async signUp(
        name: string,
        email: string,
        password: string,
        avatar: string
        
    ): Promise<{accessToken: string, user: User}> {
        
        const response = await axiosInstance.post('/auth/signup', {
            name,
            email,
            password,
            avatar
        })
        
        setAccessToken(response.data.accessToken)
        return response.data
    }

    static async logout(): Promise<void> {
        await axiosInstance.delete('/auth/logout')
        setAccessToken('')
    }
}