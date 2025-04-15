
export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <section>
          <h2 className="text-heading-h2 mb-6">Heading Styles</h2>
          <div className="space-y-4">
            <h1 className="text-heading-h1 text-test">Heading H1 - 3.5rem</h1>
            <h2 className="text-heading-h2">Heading H2 - 2.5rem</h2>
            <h3 className="text-heading-h3">Heading H3 - 2rem</h3>
            <h4 className="text-heading-h4">Heading H4 - 1.5rem</h4>
            <h5 className="text-heading-h5">Heading H5 - 1.25rem</h5>
            <h6 className="text-heading-h6">Heading H6 - 1rem</h6>
          </div>
        </section>

        <section>
          <h2 className="text-heading-h2 mb-6">Body Text Styles</h2>
          <div className="space-y-4">
            <p className="text-body-lg">
              Body Large (1.125rem) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-body-md">
              Body Medium (1rem) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-body-sm">
              Body Small (0.875rem) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-body-xs">
              Body Extra Small (0.75rem) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
