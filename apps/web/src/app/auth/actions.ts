'use server'

import { redirect } from 'next/navigation'

export async function signInWithGithub() {
  const githubSignInURL = new URL('login/oauth/authorize', 'https://github.com')

  githubSignInURL.searchParams.append('client_id', 'Ov23liDCtMZDQuJLr2OG')
  githubSignInURL.searchParams.append(
    'redirect_uri',
    'http://localhost:3000/api/auth/callback',
  )
  githubSignInURL.searchParams.append('scope', 'user')

  redirect(githubSignInURL.toString())
}
