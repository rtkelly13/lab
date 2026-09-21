import type { ComponentType } from 'react';
import PhotosFaces from '@/experiments/photos-faces';

export interface Experiment {
  slug: string;
  title: string;
  summary: string;
  View: ComponentType;
}

/* Add an experiment: create experiments/<slug>/index.tsx, then register it
   here. The index page and /experiments/[slug] route pick it up from this
   single list. */
export const experiments: Experiment[] = [
  {
    slug: 'photos-faces',
    title: 'Google Photos face finder',
    summary:
      'Iterate my library via gphotos-sync face groups and pull photos of specific people.',
    View: PhotosFaces,
  },
];

export function getExperiment(slug: string): Experiment | undefined {
  return experiments.find((experiment) => experiment.slug === slug);
}
