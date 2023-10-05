import { ReactNode } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Skeleton } from '../ui/skeleton'
import { GetFormStats } from '@/types'
import { LuView } from 'react-icons/lu'
import { FaWpforms } from 'react-icons/fa'
import { HiCursorClick } from 'react-icons/hi'
import { TbArrowBounce } from 'react-icons/tb'

interface IStatCard {
  title: string
  value: string
  description: string
  className: string
  loading: boolean
  icon: ReactNode
}

export function StatCard({
  title,
  value,
  description,
  className,
  loading,
  icon,
}: IStatCard) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row pb-2 justify-between items-center">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading && (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          )}
          {!loading && value}
        </div>
        <p className="text-xs text-muted-foreground pt-1">{description}</p>
      </CardContent>
    </Card>
  )
}

interface IStatCards {
  data?: GetFormStats
  loading: boolean
}

export function StatCards({ data, loading }: IStatCards) {
  return (
    <div className="w-full flex flex-wrap justify-around gap-4 min-w-full lg:min-w-min">
      <StatCard
        className="shadow-md shadow-blue-600 flex-1"
        title="Total visits"
        description="All time visits"
        loading={loading}
        icon={<LuView className="text-blue-600" />}
        value={data?.visits.toLocaleString() || ''}
      />
      <StatCard
        className="shadow-md shadow-yellow-600 flex-1 min-w-full lg:min-w-min"
        title="Total submissions"
        description="All time form submissions"
        loading={loading}
        icon={<FaWpforms className="text-yellow-600" />}
        value={data?.submissions.toLocaleString() || ''}
      />
      <StatCard
        className="shadow-md shadow-green-600 flex-1 min-w-full lg:min-w-min"
        title="Submission rate"
        description="Visits that results in submission"
        loading={loading}
        icon={<HiCursorClick className="text-green-600" />}
        value={data?.submissionRate.toLocaleString() || ''}
      />
      <StatCard
        className="shadow-md shadow-red-600 flex-1 min-w-full lg:min-w-min"
        title="Bounce Rate"
        description="Visits that does not result in a submission"
        loading={loading}
        icon={<TbArrowBounce className="text-red-600" />}
        value={data?.bounceRate.toLocaleString() || ''}
      />
    </div>
  )
}
