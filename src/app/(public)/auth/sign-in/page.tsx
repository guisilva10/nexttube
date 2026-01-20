"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { useTransition } from "react";
import { signIn } from "next-auth/react";
import { LoaderIcon } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

export default function Page() {
  const [isPending, startTransition] = useTransition();
  const handleGoogleSSignIn = async () => {
    startTransition(async () => {
      await signIn("google", {
        callbackUrl: "/app",
      });
    });
  };
  return (
    <main className="flex h-screen items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={handleGoogleSSignIn} disabled={isPending}>
            {isPending ? (
              <p className="flex items-center gap-2">
                Signing in <LoaderIcon className="animate-spin" />
              </p>
            ) : (
              <p className="flex items-center gap-2">
                Sign in with <FaGoogle />
              </p>
            )}
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
