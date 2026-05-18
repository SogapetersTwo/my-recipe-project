import { useState } from "react";
import { storeContext } from "./storeContextValue";

export const StoreProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_SPOONCULAR_API_KEY;
  const apiUrl = import.meta.env.VITE_SPOONCULAR_API_URL;

  async function fetchRecipes(query = ingredients) {
    const trimmedQuery = query?.trim() || "";
    if (!trimmedQuery) {
      setError("Please add at least one ingredient.");
      setRecipes([]);
      return;
    }

    if (!apiUrl) {
      setError("Recipe API URL is not configured.");
      setRecipes([]);
      return;
    }

    setLoading(true);
    setError("");
    setRecipes([]);

    const cleanQuery = encodeURIComponent(trimmedQuery);
    const url = `${apiUrl}/recipes/findByIngredients?ingredients=${cleanQuery}&number=10${apiKey ? `&apiKey=${apiKey}` : ""}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        const message = await response.text();
        throw new Error(`Recipe API request failed: ${response.status} ${message}`);
      }

      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error("Unexpected recipe data format.");
      }

      setRecipes(data);
      if (data.length === 0) {
        setError("No recipes found for those ingredients. Try something else.");
      }
    } catch (fetchError) {
      console.error("Error fetching recipes:", fetchError);
      setError(fetchError.message || "Unable to load recipes right now. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  const contextObj = {
    ingredients,
    setIngredients,
    recipes,
    setRecipes,
    loading,
    error,
    fetchRecipes,
  };

  return <storeContext.Provider value={contextObj}>{children}</storeContext.Provider>;
};
