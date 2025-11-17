import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react';

function App() {

  return (
    <>
      <header>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedIn >
        <SignOutButton />
      </SignedIn>
    </header>
    </>
  )
}

export default App