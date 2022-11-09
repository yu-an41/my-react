import { createContext, useState } from "react";

const AuthContext = createContext({});

export default AuthContext;

export const AuthContextProvider = function ({children}) {
    //const [theme, setTheme] = useState(themes.light);

    // TODO: 取得目前狀態
    // 2. 登入: 成功, 失敗
    // TODO: 登出

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}