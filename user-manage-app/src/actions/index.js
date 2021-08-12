import { REGISTRION } from './types';

export const registerUser = (hash) => {
    return {
        type: REGISTRION,
        payload: hash
    }
}
