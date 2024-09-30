import { notFound, redirect } from "next/navigation"
import { Appointment, User } from "@prisma/client"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { Editor } from "@/components/editor"
import { getDetail } from "@/components/get-anime-detail"

async function getAppointmentForUser(
  postId: Appointment["id"],
  userId: User["id"]
) {
  return await db.appointment.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  })
}

interface EditorPageProps {
  params: { postId: string }
}

export default async function EditorPage({ params }: EditorPageProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const appointment = await getAppointmentForUser(params.postId, user.id)

  if (!appointment) {
    notFound()
  }

  // await getDetail()

  return (
    <Editor
      appointment={{
        id: appointment.id,
        title: appointment.title,
        content: appointment.content,
        published: appointment.published,
      }}
    />
  )
}
