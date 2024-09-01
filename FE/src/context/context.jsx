import { createContext, useState } from "react";

export const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [BackendError, setBackendError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddUser, setIsAddUser] = useState(false)
    const [isShowUsers, setIsShowUsers] = useState(true)
    console.log('BackendError :>> ', BackendError);
    return (
        <Context.Provider
            value={{
                BackendError, setBackendError, isModalOpen, setIsModalOpen,
                isAddUser, setIsAddUser, isShowUsers, setIsShowUsers
            }}>
            {children}
        </Context.Provider>
    );
};

