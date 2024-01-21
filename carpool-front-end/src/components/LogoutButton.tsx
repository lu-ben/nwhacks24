import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="cursor-pointer text-lg" onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })}
      >
        Sign Out
      </div>
    )
  )
}

export default LogoutButton
