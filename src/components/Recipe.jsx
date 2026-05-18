import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "./Spinner";

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_SPOONCULAR_API_KEY;
  const apiUrl = import.meta.env.VITE_SPOONCULAR_API_URL;

  useEffect(() => {
    async function loadRecipe() {
      if (!id) {
        setError("Missing recipe identifier.");
        setLoading(false);
        return;
      }

      if (!apiUrl) {
        setError("Recipe API URL is not configured.");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");

      try {
        const url = `${apiUrl}/recipes/${id}/information?includeNutrition=false${apiKey ? `&apiKey=${apiKey}` : ""}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to load recipe: ${response.status}`);
        }

        const data = await response.json();
        setRecipe(data);
      } catch (fetchError) {
        console.error("Recipe fetch error:", fetchError);
        setError(fetchError.message || "Could not load recipe details.");
      } finally {
        setLoading(false);
      }
    }

    loadRecipe();
  }, [id, apiUrl, apiKey]);

  useEffect(() => {
    if (recipe) {
      // scroll to top when recipe details are loaded
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [recipe]);

  // Utility function to remove HTML tags from the summary text
  function stripHtml(html = "") {
    return html.replace(/<[^>]*>/g, "");
  }

  return (
    <main className="bg-slate-950 min-h-screen text-slate-100">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition hover:text-white"
        >
          ← Back to home
        </Link>

        <div className="mt-8 rounded-4xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30">
          {loading ? (
            <Spinner />
          ) : error ? (
            <div className="rounded-3xl border border-red-400/20 bg-red-500/10 p-8 text-red-200">{error}</div>
          ) : recipe ? (
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div className="space-y-6">
                <div className="overflow-hidden rounded-[1.75rem] bg-slate-950 shadow-inner shadow-slate-950/50">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="h-96 w-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">Recipe details</p>
                  <h1 className="text-4xl font-semibold tracking-tight text-white">{recipe.title}</h1>
                  <p className="max-w-3xl text-slate-300 leading-8">{stripHtml(recipe.summary)}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/5 p-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Ready in</p>
                    <p className="mt-3 text-xl font-semibold text-white">{recipe.readyInMinutes ?? "—"} min</p>
                  </div>
                  <div className="rounded-3xl bg-white/5 p-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Servings</p>
                    <p className="mt-3 text-xl font-semibold text-white">{recipe.servings ?? "—"}</p>
                  </div>
                </div>
              </div>

              <aside className="space-y-6 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Recipe class</p>
                  <p className="text-lg font-semibold text-white">{recipe.dishTypes?.[0] || "General"}</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Diet types</p>
                  <div className="flex flex-wrap gap-2">
                    {(recipe.diets?.length ? recipe.diets : ["No specific diet"]).map((diet) => (
                      <span key={diet} className="rounded-full bg-brand-400/10 px-3 py-1 text-xs font-semibold text-brand-200">
                        {diet}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Health score</p>
                  <p className="text-xl font-semibold text-white">{recipe.healthScore ?? "—"}</p>
                </div>
              </aside>
            </div>
          ) : (
            <div className="rounded-3xl bg-white/5 p-8 text-slate-300">Recipe information is not available.</div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Recipe;