import { buttonVariants } from "@/app/_components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div>Hello world!</div>
      <Link
        href="/auth/sign-in"
        className={buttonVariants({ variant: "link" })}
      >
        Fazer Login
      </Link>
    </main>
  );
}
