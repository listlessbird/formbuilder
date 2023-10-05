import { GetFormStats } from '@/actions/form'
import { CreateFormBtn } from '@/components/createformbtn'
import { StatCards } from '@/components/dashboard/Stats'
import { Separator } from '@/components/ui/seperator'
import { Suspense } from 'react'

export default function Page() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatCards loading />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="text-bold text-4xl">Your Forms</h2>
      <Separator className="my-6" />
      <div className="">
        <CreateFormBtn />
      </div>
    </div>
  )
}

async function CardStatsWrapper() {
  const stats = await GetFormStats()
  return <StatCards data={stats} loading={false} />
}
