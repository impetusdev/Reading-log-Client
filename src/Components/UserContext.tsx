import { createContext } from "react";

interface IUserContext {
    user:{
        email: string,
        token: string,
    },
    setUser: () => void
}

export const UserContext = createContext<any | null>({user: null});