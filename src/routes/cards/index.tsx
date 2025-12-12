import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/cards/')({
  component: CardsPage,
})

function CardsPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Card Database</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <Link
          to="/cards/$cardName"
          params={{ cardName: 'last turn' }}
          className="bg-amber-400 h-800"
        >
          Test
        </Link>
      </div>
    </div>
  )
}
