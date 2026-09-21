import Link from 'next/link';
import { experiments } from '@/lib/experiments';

export default function Home() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="font-mono">lab</h1>
      <p>
        Local-first playground for web experiments. Same stack as the blog,
        secrets via <code>op run</code>, nothing deploys.
      </p>
      <ul className="list-none space-y-4 p-0">
        {experiments.map((experiment) => (
          <li
            key={experiment.slug}
            className="border border-(--ds-border-default) p-4"
          >
            <Link
              href={`/experiments/${experiment.slug}`}
              className="font-mono text-lg text-(--ds-accent-primary) no-underline"
            >
              {experiment.title}
            </Link>
            <p className="mt-1 text-sm text-(--ds-text-muted)">
              {experiment.summary}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
