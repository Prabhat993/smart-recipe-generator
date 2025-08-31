// pages/api/match-recipes.js
import dbConnect from '../../lib/dbConnect';
import Recipe from '../../models/Recipe';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { ingredients = [], diet = 'all' } = req.body || {};

    if (!Array.isArray(ingredients)) {
      return res.status(400).json({ message: 'ingredients must be an array of strings' });
    }

    await dbConnect();

    const query = {};
    if (diet && diet !== 'all') {
      query.tags = { $in: [diet] };
    }

    const candidates = await Recipe.find(query).lean();

    const norm = (s) => String(s || '').trim().toLowerCase();
    const userSet = new Set(ingredients.map(norm));

    const scored = candidates
      .map((r) => {
        const recipeIng = (r.ingredients || []).map((i) => norm(i.name));
        const total = recipeIng.length || 1;
        let matches = 0;
        for (const i of userSet) {
          if (recipeIng.includes(i)) matches++;
        }
        const score = Math.round((matches / total) * 100);
        return { ...r, score, matchCount: matches };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score || (a.cookingTime || 0) - (b.cookingTime || 0));

    return res.status(200).json({ recipes: scored });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
}