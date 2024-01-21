import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <div className="border border-white py-2 px-4 rounded-md cursor-pointer" onClick={() => loginWithRedirect()}>
                Sign In
            </div>
        )
    )
}

export default LoginButton
