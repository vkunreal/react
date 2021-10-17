import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

export default function Home({ authed, onLogout }) {
  const history = useHistory();

  const handleLogin = () => history.push("/login");
  const handleSignUp = () => history.push("/signup");
  const handleLogout = () => onLogout();

  return (
    <div>
      <h2>Home</h2>

      <div>
        {!authed ? (
          <>
            <Button variant="outlined" onClick={handleLogin}>
              Login
            </Button>
            <Button variant="outlined" onClick={handleSignUp}>
              Sign up
            </Button>
          </>
        ) : (
          <Button variant="outlined" onClick={handleLogout}>
            Sign out
          </Button>
        )}
      </div>
    </div>
  );
}
