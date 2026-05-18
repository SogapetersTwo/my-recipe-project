import { useContext } from "react";
import { storeContext } from "../context/storeContextValue";
import { Link } from "react-router-dom";

function Dashboard() {
  const { ingredients, setIngredients, recipes, fetchRecipes, loading, error } = useContext(storeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  const handleClear = () => {
    setIngredients("");
  };

  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen">
      {loading && (
        <div className="loadingSpinnerContainer">
          <div className="loadingSpinner" />
        </div>
      )}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        
        <div className="rounded-4xl border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/30 space-y-8">
          
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
              Your personal chef
            </p>

            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              Find delicious recipes from the ingredients you already have.
            </h1>

            <p className="text-slate-400 leading-7 max-w-2xl">
              Type in the ingredients available in your kitchen and MyRecipee will instantly
              suggest meals you can cook today — fast, simple, and tasty.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-slate-300">
                Ingredients
              </label>
              <input
                type="text"
                placeholder="e.g. rice, chicken, tomatoes"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                disabled={loading}
                className={`mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20 ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={loading}
                className={`flex-1 inline-flex items-center justify-center rounded-3xl bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                Find Recipes
              </button>

              <button
                type="button"
                onClick={handleClear}
                disabled={loading}
                className={`flex-1 inline-flex items-center justify-center rounded-3xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                Clear
              </button>
            </div>
          </form>

          <div className="space-y-6">
            {error ? (
              <div className="rounded-3xl border border-red-400/20 bg-red-500/10 p-4 text-sm text-red-200">
                {error}
              </div>
            ) : null}

            {loading ? (
              <div className="rounded-3xl bg-white/5 p-5 text-center text-slate-200">Searching recipes…</div>
            ) : recipes.length > 0 ? (
              <div className="grid gap-6 lg:grid-cols-2">
                {recipes.map((recipe, index) => (
                  <div key={recipe.id || index} className="flex flex-col rounded-4xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                      {recipe.image ? (
                        <img
                          src={recipe.image}
                          alt={recipe.title || recipe.name || "Recipe"}
                          className="h-44 w-full rounded-3xl object-cover lg:w-56"
                        />
                      ) : (
                        <div className="flex h-44 w-full items-center justify-center rounded-3xl bg-slate-800 text-slate-400 lg:w-56">
                          ?
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-lg font-semibold text-white line-clamp-2 leading-tight">
                          {recipe.title || recipe.name || "Recipe"}
                        </p>
                      </div>
                    </div>
                    <Link
                      to={`/recipe/${recipe.id}`}
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/40 transition-all duration-300 hover:bg-amber-300 hover:shadow-2xl hover:shadow-amber-500/60 hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-slate-900"
                    >
                      <span>View Recipe</span>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-3xl bg-white/5 p-5 text-slate-300">
                Enter ingredients and click Find Recipes to see suggestions here.
              </div>
            )}
          </div>

          <div className="pt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl bg-white/5 p-5 border border-white/10">
              <p className="text-lg font-semibold text-white">Smart Matching</p>
              <p className="text-slate-400 mt-2 text-sm">
                We analyze your ingredients and match them to thousands of recipes.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 p-5 border border-white/10">
              <p className="text-lg font-semibold text-white">Fast Results</p>
              <p className="text-slate-400 mt-2 text-sm">
                No long forms or filters — just type and discover meals instantly.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 p-5 border border-white/10">
              <p className="text-lg font-semibold text-white">Cook Better</p>
              <p className="text-slate-400 mt-2 text-sm">
                Learn new recipes and improve your cooking skills effortlessly.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Dashboard;
