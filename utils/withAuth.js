import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "./authContext";

const WithAuth = (ProtectedPage) => {
  return (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const router = useRouter();
    const { isLoggedIn } = useAuth();

    useEffect(() => {
      console.log("with auth wrapper ran");
      if (isLoggedIn) {
        setIsAuthenticated(true);
      } else {
        router.push("/");
      }
    }, [isLoggedIn]);

    return isAuthenticated === true && <ProtectedPage {...props} />;
  };
};

export default WithAuth;
