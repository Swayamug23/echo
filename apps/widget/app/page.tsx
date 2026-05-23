"use client";
import { useQuery, useMutation } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import {Button} from "@workspace/ui/components/button"

export default function Page() {
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)
  return (
    <div className="flex min-h-svh p-6">

      <Button onClick={() => addUser()}>Add</Button> 

      <p>app/web {JSON.stringify(users)}</p>
    </div>
  )
}
