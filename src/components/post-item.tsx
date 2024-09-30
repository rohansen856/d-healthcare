import Link from "next/link"
import { Appointment } from "@prisma/client"

import { formatDate } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import { AppointmentOperations } from "@/components/post-operations"

interface AppointmentItemProps {
  appointment: Pick<Appointment, "id" | "title" | "published" | "createdAt">
}

export function AppointmentItem({ appointment }: AppointmentItemProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`/editor/${appointment.id}`}
          className="font-semibold hover:underline"
        >
          {appointment.title}
        </Link>
        <div>
          <p className="text-sm text-muted-foreground">
            {formatDate(appointment.createdAt?.toDateString())}
          </p>
        </div>
      </div>
      <AppointmentOperations
        appointment={{ id: appointment.id, title: appointment.title }}
      />
    </div>
  )
}

AppointmentItem.Skeleton = function AppointmentItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  )
}
