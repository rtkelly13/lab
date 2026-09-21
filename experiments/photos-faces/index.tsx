export default function PhotosFaces() {
  return (
    <section className="prose prose-invert max-w-none">
      <h2>Plan</h2>
      <ol>
        <li>
          Index the library once with <code>gphotos-sync --people-search</code>
          {'; '}Google&apos;s existing face clusters come along as per-person
          albums.
        </li>
        <li>
          Query a person by label, download matches, and keep the index local
          under <code>experiments/photos-faces/.data/</code> (gitignored).
        </li>
      </ol>
      <p className="text-(--ds-text-muted)">
        OAuth + <code>op run</code> wiring lands here first.
      </p>
    </section>
  );
}
