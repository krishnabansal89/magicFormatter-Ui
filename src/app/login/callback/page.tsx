"use client";


import { useSearchParams } from "next/navigation";
import { useEffect  } from "react";
import { jwtDecode } from "jwt-decode";


export default function CallbackPage() {
    const searchParams = useSearchParams();
    useEffect(() => {
        const token = searchParams.get("token");
        if (!token) {
            console.error("No token found in callback URL");
            window.location.href = "/login";
            return;
        }
        //Save token in localStorage
        const user = jwtDecode(token as string);
        console.log("USER /n", user);
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/dashboard";
    }, [searchParams]);
    
    
    
    return (
<div className="flex items-center justify-center h-screen">
  <h1 className="text-4xl font-bold animate-bounce">
    Just wiring you in
  </h1>
</div>

    );
}