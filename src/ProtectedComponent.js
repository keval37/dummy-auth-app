import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedComponent = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Log in</button>
      ) : (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      )}
      {isAuthenticated && <h2>Protected Content</h2>}
    </div>
  );
};

export default ProtectedComponent;
