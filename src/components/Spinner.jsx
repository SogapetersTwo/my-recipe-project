function Spinner() {
  return (
    <div className="flex min-h-56 items-center justify-center rounded-3xl bg-slate-900/70 p-8">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border-4 border-brand-400 border-t-transparent bg-slate-950 shadow-lg shadow-brand-500/25 animate-spin" />
    </div>
  );
}

export default Spinner;
