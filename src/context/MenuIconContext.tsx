import React, { createContext, useContext, useState } from "react"

export interface MenuIconContextType {
    button: (e:React.FormEvent) => void
    link?: string
    icon?: string
    quantity?: number
    hideOnMobile: any
}

interface MenuIconProviderProps {
    children: any
}

export const MenuIconContext = createContext<MenuIconContextType | null>(null);

export const useMenuIconContext = () => {
    return useContext(MenuIconContext)
}

const MenuIconProvider = ({children}: MenuIconProviderProps) => {
    const [button] = useState()
    const [link] = useState<string>('')
    const [icon] = useState<string>('')
    const [quantity] = useState()
    const [hideOnMobile] = useState()

    
    return (
        <MenuIconContext.Provider value={{button, link, icon, quantity, hideOnMobile}}>
            {children}
        </MenuIconContext.Provider>
    )
}

export default MenuIconProvider
