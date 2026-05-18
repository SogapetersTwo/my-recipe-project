

function Services() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-100">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/6 bg-linear-to-b from-slate-900/60 to-slate-950/60 p-10 shadow-2xl">
          <div className="space-y-4 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Our Services</p>
            <h1 className="text-4xl font-semibold text-white">How MyRecipee Serves You</h1>
            <p className="text-slate-400 leading-7">
              MyRecipee helps home cooks and food lovers find great recipes using the ingredients they already have. We combine a curated recipe database,
              smart matching, and friendly guidance so you can cook confidently and quickly.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Smart Matching</h3>
              <p className="mt-2 text-sm text-slate-300">We analyze your ingredients and return recipes that minimize extra shopping. Faster results, less waste.</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Curated Collections</h3>
              <p className="mt-2 text-sm text-slate-300">Seasonal menus, diet-specific collections, and editor picks to inspire your next meal.</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Step-by-step Guidance</h3>
              <p className="mt-2 text-sm text-slate-300">Clear instructions, timing hints, and ingredient substitutions so every cook feels capable.</p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/8 bg-slate-900/60 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Why users trust us</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Strong client interest and real results</h2>
              <p className="mt-3 text-slate-300 leading-7">
                We focus on practical value: fast results, relevant recipes, and approachable cooking. Thousands of searches happen weekly,
                and users report higher satisfaction and less food waste after using MyRecipee.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <div className="rounded-lg bg-brand-50/10 px-4 py-3 text-sm">
                  <p className="font-semibold text-white">+12k</p>
                  <p className="text-slate-400 text-xs">Monthly searches</p>
                </div>
                <div className="rounded-lg bg-brand-50/10 px-4 py-3 text-sm">
                  <p className="font-semibold text-white">4.8/5</p>
                  <p className="text-slate-400 text-xs">Average user rating</p>
                </div>
                <div className="rounded-lg bg-brand-50/10 px-4 py-3 text-sm">
                  <p className="font-semibold text-white">80%</p>
                  <p className="text-slate-400 text-xs">Repeat users</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 bg-slate-900/60 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-300">How we serve clients</p>
              <ul className="mt-4 space-y-4 text-slate-300">
                <li className="flex gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-400 text-slate-950 font-bold">1</span>
                  <div>
                    <p className="font-semibold text-white">Search by ingredients</p>
                    <p className="text-sm text-slate-400">Enter what you have and get instant recipe matches.</p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-400 text-slate-950 font-bold">2</span>
                  <div>
                    <p className="font-semibold text-white">Personalized suggestions</p>
                    <p className="text-sm text-slate-400">We learn preferences and surface recipes you'll love.</p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-400 text-slate-950 font-bold">3</span>
                  <div>
                    <p className="font-semibold text-white">Support and tips</p>
                    <p className="text-sm text-slate-400">Recipes include pro tips, substitutions, and timing to help you succeed.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-white/6 bg-linear-to-r from-brand-400/10 to-slate-900/50 p-8 flex flex-col items-start gap-4">
            <h3 className="text-lg font-semibold text-white">Ready to try?</h3>
            <p className="text-slate-300">Start by adding ingredients on the home page and explore recipes curated for you.</p>
            <div className="mt-4">
              <a href="/" className="inline-flex items-center gap-2 rounded-full bg-brand-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:bg-brand-300">Go to Home</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services