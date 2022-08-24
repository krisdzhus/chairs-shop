// Importing Axios🔥
import axios from "axios";

// Modules from Firebase
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

// Hooks from React
import { useEffect, useState } from "react";

// Initialize Authentication
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();

// The Hook
const useFirebase = () => {
  // Setting user data in the state
  const [user, setUser] = useState({});

  // Set the admin data
  const [admin, setAdmin] = useState(false);

  // Catching auth related errors
  const [authError, setAuthError] = useState("");

  // Set loader for holding the user's state
  const [isLoading, setIsLoading] = useState(true);

  // Get initial auth data
  const auth = getAuth();

  // Function for registering new user
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");

        // Set the user
        const newUser = { email, displayName: name };
        setUser(newUser);

        // Save user to database
        saveUser(email, name);

        // Update user profile
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            setAuthError("");
          })
          .catch((err) => {
            console.log(err.message);
            setAuthError(err.message);
          });

        // Redirect user back to home page
        history.replace("/");
      })
      .catch((err) => {
        console.log(err.message);
        setAuthError(err.message);
      }) // Releasing the state after window reload
      .finally(() => setIsLoading(false));
  };

  // Function for log in existing user
  const logInUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Redirect the user where he wanted to go
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((err) => {
        console.log(err.message);
        // Make the error human friendly
        setAuthError(err.message.slice(22, -2));
      }) // Releasing the state
      .finally(() => setIsLoading(false));
  };

  // Monitor the user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // For checking if the user is an Admin or not
  useEffect(() => {
    axios
      .get(`https://morning-scrubland-84603.herokuapp.com/users/${user.email}`)
      .then((res) => {
        setAdmin(res.data.admin);
      });
  }, [user.email]);

  // Function for log out a user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // Function for save the user to the database
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    axios
      .post("https://morning-scrubland-84603.herokuapp.com/users", user)
      .then((res) => {
        console.log(res.data);
      });
  };

  return {
    user,
    admin,
    authError,
    isLoading,
    registerUser,
    logInUser,
    logOut,
  };
};
export default useFirebase;
