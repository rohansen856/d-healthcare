import { DashboardHeader } from "@/components/header"
import { AppointmentCreateButton } from "@/components/post-create-button"
import { AppointmentItem } from "@/components/post-item"
import { DashboardShell } from "@/components/shell"

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Appointments" text="Create and manage posts.">
        <AppointmentCreateButton />
      </DashboardHeader>
      <div className="divide-border-200 divide-y rounded-md border">
        <AppointmentItem.Skeleton />
        <AppointmentItem.Skeleton />
        <AppointmentItem.Skeleton />
        <AppointmentItem.Skeleton />
        <AppointmentItem.Skeleton />
      </div>
    </DashboardShell>
  )
}
