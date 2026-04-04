declare module '@supabase/supabase-js' {
  export type Session = {
    user: {
      id: string
    }
    provider_token?: string | null
  }

  export type SupabaseClient = {
    auth: {
      getSession(): Promise<{
        data: {
          session: Session | null
        }
        error: { message: string } | null
      }>
      onAuthStateChange(
        callback: (event: unknown, session: Session | null) => void,
      ): {
        data: {
          subscription: {
            unsubscribe(): void
          }
        }
      }
      signInWithOAuth(options: {
        provider: string
        options?: {
          redirectTo?: string
          scopes?: string
        }
      }): Promise<{
        error: { message: string } | null
      }>
      signOut(): Promise<{
        error: { message: string } | null
      }>
    }
    from(table: string): any
  }

  export function createClient(url: string, anonKey: string, options?: unknown): SupabaseClient
}
