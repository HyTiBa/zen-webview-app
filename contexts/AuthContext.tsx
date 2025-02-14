// "use client";

// import { auth } from "@/firebase";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   User,
// } from "firebase/auth";
// import { createContext, useContext, useEffect, useState } from "react";

// const AuthContext = createContext(null);
// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [currentUser, setCurrentUser] = useState<User | null>(null);
//   const [userDataObject, setUserDataObject] = useState({});
//   const [loading, setLoading] = useState(false);

//   function signUp(email: string) {
//     return createUserWithEmailAndPassword(auth, email, "password");
//   }
//   function SignOut() {
//     setUserDataObject({});
//     setCurrentUser(null);
//     return signOut(auth);
//   }
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       try {
//         setLoading(true);
//         setCurrentUser(user);
//         if (user == null) {
//           return;
//         }
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     });
//   }, []);

//   return <AuthContext.Provider value={}>{children}</AuthContext.Provider>;
// }
