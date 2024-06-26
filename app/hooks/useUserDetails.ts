import * as React from "react";
import Toast from 'react-native-toast-message';
import { useAuth, useUser } from "./contexts";
import { useTranslation } from "react-i18next";

/**
 * Attention! this function should be called only once in the `navigation/index.tsx`
 */
export function useUserDetails() {

    const { userDetails, state: { user, isLoading } } = useUser();
    const { signout, state: { token } } = useAuth();
    const mountedRef = React.useRef<boolean>();
    const [error, setError] = React.useState<string | null>(null);
    const { t } = useTranslation();

    React.useEffect(() => {
        mountedRef.current = true;

        if (mountedRef.current && token != null) {
            userDetails().catch(err => {
                if ('Request failed with status code 401' == err.message) {
                    signout();
                    Toast.show({
                        text1: t('session_expired') ?? '',
                        position: 'bottom',
                        type: 'error'
                    })
                } else {
                    setError(err.message);
                    Toast.show({
                        text1: err.message,
                        position: 'bottom',
                        type: 'error',
                    })
                }
            })
        }

        return () => {
            mountedRef.current = false;
        }
    }, [token]);

    return { user, token, error, signout, isLoading }
}
