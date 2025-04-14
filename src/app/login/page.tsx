"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { auth, googleAuthProvider } from "../../firebase/firebase";
import { signInWithRedirect } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const router = useRouter();
  const { currentUser, loading } = useAuth();
  const [googleTrue, setGoogleTrue] = useState(false);

  // useEffect(() => {
  //   if (!loading && currentUser) {
  //     router.push('/');
  //   }
  // }, [currentUser, loading, router]);
  
  useEffect(() => {
    console.log("Loading:", loading);
    console.log("User:", currentUser);
  }, [loading, currentUser]);

  useEffect(()=>{
    if(googleTrue){
      router.push("/")
    } else {
      router.push("/login")
    }
  },[])
  

  const handleSignInWithGoogle = async () => {
    try {
      setGoogleTrue(false)
      await signInWithRedirect(auth, googleAuthProvider);
    } catch (error) {
      console.error("Error initiating Google sign-in:", error);
    } finally {
      setGoogleTrue(true)
    }
  };



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-3xl font-semibold mb-4">Welcome to SolarisAI</h1>
      <p className="text-muted-foreground mb-6">Sign in to access the platform.</p>
      <Button onClick={handleSignInWithGoogle} variant="outline">
        Sign In with Google
      </Button>
    </div>
  );
};

export default Login;
