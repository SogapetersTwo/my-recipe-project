import { IoRestaurant, IoSparkles, IoCheckmarkCircle } from "react-icons/io5";

function About() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-amber-400/10 px-4 py-1 text-sm font-semibold text-amber-300">
              About Recipee
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Delicious recipes made simple, fresh, and joyful.
            </h1>
            <p className="mt-5 max-w-2xl text-slate-300 leading-8">
              Recipee helps you discover meal ideas that fit your lifestyle, whether youre cooking for one or planning a dinner party. Browse quick recipes,
              seasonal favorites, and kitchen tricks that make every dinner feel special.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/30">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                  <IoRestaurant className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-white">Curated recipes</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Freshly curated meal ideas for breakfast, lunch, dinner, and snacks.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/30">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
                  <IoSparkles className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-white">Easy to follow</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Step-by-step instructions and smart tips keep cooking stress-free.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-slate-950/30">
            <div className="rounded-[1.75rem] bg-slate-800/70 p-8 sm:p-10">
              <div className="rounded-3xl bg-slate-950 p-8 text-slate-300 shadow-inner shadow-slate-950/50">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Why users love Recipee</p>
                <ul className="mt-8 space-y-5 text-sm leading-7">
                  <li className="flex gap-3">
                    <IoCheckmarkCircle className="mt-1 h-5 w-5 text-emerald-400" />
                    <span>Fast recipe search for any diet or cuisine.</span>
                  </li>
                  <li className="flex gap-3">
                    <IoCheckmarkCircle className="mt-1 h-5 w-5 text-emerald-400" />
                    <span>Clear ingredients, cooking time, and tips at a glance.</span>
                  </li>
                  <li className="flex gap-3">
                    <IoCheckmarkCircle className="mt-1 h-5 w-5 text-emerald-400" />
                    <span>Beautiful mobile-friendly layout for kitchen use.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
