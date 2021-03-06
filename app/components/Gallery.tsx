import type { Post } from '$lib/types'
import Link from 'next/link'
import Image from 'next/image'

import { urlFor } from '$lib/utils/sanity'
import Avatar from '$components/Avatar'

export default function Gallery({ posts }: Props) {
  return (
    <div className="wrapper py-4 md:py-6">
      <main className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {posts.map(p => (
          <Link key={p._id} href={`/posts/${p.slug}`}>
            <a className="group block overflow-hidden rounded-lg border shadow">
              <div className="relative h-60 w-full">
                <Image
                  src={urlFor(p.mainImage).url()}
                  alt={p.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-200 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between bg-white p-4">
                <div className="flex-grow pr-4">
                  <p className="text-lg font-medium">{p.title}</p>
                  <p className="max-w-[320px] truncate text-sm text-gray-700">
                    {p.description} by {p.author.name}
                  </p>
                </div>
                <div>
                  <Avatar user={p.author} size={48} isLink={false} />
                </div>
              </div>
            </a>
          </Link>
        ))}
      </main>
    </div>
  )
}

type Props = {
  posts: Post[]
}
