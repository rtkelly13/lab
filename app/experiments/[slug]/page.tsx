import Link from 'next/link';
import { notFound } from 'next/navigation';
import { experiments, getExperiment } from '@/lib/experiments';

export function generateStaticParams() {
  return experiments.map((experiment) => ({ slug: experiment.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experiment = getExperiment(slug);
  return experiment ? { title: `lab — ${experiment.title}` } : { title: 'lab' };
}

export default async function ExperimentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experiment = getExperiment(slug);
  if (!experiment) notFound();

  const View = experiment.View;
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <Link
          href="/"
          className="font-mono text-sm text-(--ds-text-muted) no-underline"
        >
          ← lab
        </Link>
        <h1 className="font-mono text-2xl">{experiment.title}</h1>
        <p className="text-sm text-(--ds-text-muted)">{experiment.summary}</p>
      </header>
      <View />
    </div>
  );
}
