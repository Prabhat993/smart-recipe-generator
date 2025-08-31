"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import ImageUploader from "../components/ImageUploader";
import IngredientInput from "../components/IngredientInput";
import RecipeList from "../components/RecipeList";
import Spinner from "../components/Spinner";

// Typewriter hook
function useTypewriter(words, speed = 100, pause = 1500) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === words.length) setIndex(0);

    if (forward && subIndex === words[index].length) {
      setTimeout(() => setForward(false), pause);
      return;
    }

    if (!forward && subIndex === 0) {
      setForward(true);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, forward, words, speed, pause]);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timeout2);
  }, []);

  return `${words[index].substring(0, subIndex)}${blink ? "|" : ""}`;
}

export default function Home() {
  const [ingredients, setIngredients] = useState([]);
  const [diet, setDiet] = useState("all");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const typedText = useTypewriter([
    "I am your chief and I am your kitchen guru and will assist in your recipe",
  ]);

  useEffect(() => {
    async function fetchRecipes() {
      if (ingredients.length === 0) {
        setRecipes([]);
        return;
      }
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/api/match-recipes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ingredients, diet }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.message || "Failed to fetch");
        setRecipes(data.recipes || []);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    const timer = setTimeout(() => fetchRecipes(), 300);
    return () => clearTimeout(timer);
  }, [ingredients, diet]);

  function onIngredientsDetected(list) {
    const lower = list.map((x) => x.toLowerCase());
    const set = new Set([...ingredients, ...lower]);
    setIngredients(Array.from(set));
  }

  return (
    <>
      <Header />

      <main
        className="relative min-h-screen bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        {/* Typing Text Section (Removed Chief Image) */}
        <div className="fixed top-6 right-1/2 translate-x-1/2 z-30 text-center px-4">
          <p className="text-2xl sm:text-4xl md:text-5xl font-extrabold animate-pulse bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
            {typedText}
          </p>
        </div>

        {/* Content Wrapper */}
        <div
          className="relative z-10 flex flex-col items-center px-4 pb-20"
          style={{ paddingTop: "180px" }}
        >
          {/* Main Card */}
          <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 sm:p-10 rounded-2xl shadow-xl max-w-5xl w-full mx-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-orange-600 drop-shadow-md">
              🍲 What ingredients do you have?
            </h2>

            {/* Upload + Manual Input Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <ImageUploader onIngredientsDetected={onIngredientsDetected} />
              <IngredientInput
                ingredients={ingredients}
                setIngredients={setIngredients}
              />
            </div>

            {/* Diet Filter */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <label
                htmlFor="diet"
                className="font-bold text-lg text-gray-800"
              >
                Diet filter:
              </label>
              <select
                id="diet"
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 font-semibold text-gray-700"
              >
                <option value="all">All</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten-free</option>
                <option value="quick">Quick</option>
              </select>
            </div>

            {/* Results */}
            {loading ? (
              <div className="flex justify-center items-center gap-3 text-orange-500 font-bold text-lg">
                <Spinner /> Finding recipe matches…
              </div>
            ) : error ? (
              <div className="text-red-700 bg-red-100 p-4 rounded-md font-bold text-lg">
                {error}
              </div>
            ) : (
              <RecipeList recipes={recipes} />
            )}
          </div>
        </div>
      </main>
    </>
  );
}
" " 
