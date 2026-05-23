"use client";
import { useQuery, useMutation,Authenticated, Unauthenticated } from "convex/react"
import { SignInButton, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api"
import {Button} from "@workspace/ui/components/button"

export default function Page() {
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)
  return (
    <>
    <Authenticated>
      <div className="flex flex-col">

      <Button onClick={() => addUser()}>Add</Button> 

      <p>app/web {JSON.stringify(users)}</p>

      <UserButton />
    </div>
    </Authenticated>

    <Unauthenticated>
      Must be signed in to see users
      <SignInButton />
    </Unauthenticated>
    
    </>
  )
}
