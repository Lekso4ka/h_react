import { createContext, useContext } from "react";

export const StatusContext = createContext(null);

export function useNotFound() {
    const status = useContext(StatusContext);
    if (status) status.code = 404;
}
