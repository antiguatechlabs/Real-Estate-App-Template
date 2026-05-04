type CatalogsSummaryProps = {
  catalogsCount: Array<[string, number]>;
};

export function CrmCatalogsSummary({ catalogsCount }: CatalogsSummaryProps) {
  return (
    <section className="rounded-lg border border-[#E5E1D8] bg-white p-4">
      <p className="text-sm font-semibold text-[#111111]">Catalogos</p>
      <div className="mt-3 space-y-2">
        {catalogsCount.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-3 text-sm text-[#343831]">
            <span>{label}</span>
            <span className="font-semibold tabular-nums">{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
