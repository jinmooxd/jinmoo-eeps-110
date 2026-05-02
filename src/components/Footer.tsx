export function Footer() {
  const references = [
    { label: "USGS Rock Cycle", href: "https://www.usgs.gov/special-topics/water-science-school/science/rock-cycle" },
    { label: "Encyclopaedia Britannica: Rock Cycle", href: "https://www.britannica.com/science/rock-cycle" },
    {
      label: "OpenGeology: Metamorphism",
      href: "https://opengeology.org/textbook/9-metamorphism-and-metamorphic-rocks/",
    },
    { label: "National Park Service Geology", href: "https://www.nps.gov/subjects/geology/index.htm" },
  ];

  return (
    <footer className="border-t hairline mt-24 px-6 py-10 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        <div>
          <p className="text-sm text-basalt/70">Jinmoo Yoo - EEPS 110 - Rice University - Spring 2026</p>
          <p className="mt-2 text-xs text-basalt/50">Last updated: May 2026</p>
        </div>
        <div>
          <p className="mono-label text-[0.62rem] text-basalt/60">References</p>
          <ul className="mt-2 space-y-1 text-sm">
            {references.map((ref) => (
              <li key={ref.href}>
                <a className="underline-offset-2 hover:underline" href={ref.href} target="_blank" rel="noreferrer">
                  {ref.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
