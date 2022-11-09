import AuthContext, { AuthContextProvider } from "./AuthContext";
import ThemeContext, { ThemeContextProvider } from "./ThemeContext";

export default function MyContextProviders({children}) {
    return (
        <ThemeContextProvider>
            <AuthContextProvider>
                {children}
            </AuthContextProvider>
        </ThemeContextProvider>
    );
}