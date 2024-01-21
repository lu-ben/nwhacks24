import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <div className="text-3xl py-2 px-4 underline cursor-pointer" onClick={() => loginWithRedirect()}>
                Sign In
            </div>
        )
    )
}

export default LoginButton
