import { GetFormStats } from "@/actions/form"
import { StatCards } from "@/components/dashboard/Stats"
import { Suspense } from "react"

export default function Page() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatCards loading />}>
        <CardStatsWrapper />
      </Suspense>
    </div>
  )
}


async function CardStatsWrapper() {
  const stats = await GetFormStats()
  return <StatCards data={stats} loading={false}/>
}