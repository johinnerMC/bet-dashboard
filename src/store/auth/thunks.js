import { checkingCredentials } from "./slice"

export const checkingAuthentication = () => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}