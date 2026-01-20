import { DefaultSession } from "next-auth";

type UserRole = string | null;

declare module "next-auth" {
  // Estender a interface User (isso é o que estava faltando!)
  interface User {
    id: string;
  }

  // Estender a interface Session
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  // Estender a interface AdapterUser (opcional, mas recomendado)
  interface AdapterUser {
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}
