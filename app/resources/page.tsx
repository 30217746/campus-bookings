import ResourceCard from './resource-card'
import { resources } from '@/lib/resources'

export default function ResourcesPage() {
    return (
        <section className="flex items-center justify-between bg-slate-900 p-4 text-white">
            {resources.map((r) => (
                <ResourceCard
                    key={r.id}
                    resource={r}
                    popular={r.capacity > 20}
                />
            ))}
        </section>
    )
}​

export const metadata = {​
title: 'Resources',​
}​