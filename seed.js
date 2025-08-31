// seed.js
const mongoose = require("mongoose");

// Import dotenv to load .env.local
require("dotenv").config({ path: ".env.local" });

// 1. Define Schema
const recipeSchema = new mongoose.Schema({
  name: String,
  cookingTime: Number,
  difficulty: String,
  servings: Number,
  tags: [String],
  ingredients: [
    {
      name: String,
      quantity: String,
    },
  ],
  instructions: [String],
  nutritionalInfo: {
    calories: String,
    protein: String,
  },
});

// 2. Create Model
const Recipe = mongoose.model("Recipe", recipeSchema);

// 3. Recipe Data
const recipes = [
  {
    name: 'Chola Bhatura',
    cookingTime: 90,
    difficulty: 'Medium',
    servings: 4,
    tags: ['vegetarian', 'north indian', 'main course', 'punjabi'],
    ingredients: [
      { name: 'chickpeas (chole)', quantity: '1.5 cups, soaked overnight' },
      { name: 'onion', quantity: '2 large, finely chopped' },
      { name: 'tomato', quantity: '3 medium, pureed' },
      { name: 'ginger-garlic paste', quantity: '1.5 tbsp' },
      { name: 'green chilli', quantity: '2, slit' },
      { name: 'chana masala powder', quantity: '2 tbsp' },
      { name: 'turmeric powder', quantity: '1/2 tsp' },
      { name: 'red chilli powder', quantity: '1 tsp' },
      { name: 'tea bags', quantity: '2 (for color)' },
      { name: 'all-purpose flour (maida)', quantity: '2 cups' },
      { name: 'semolina (sooji)', quantity: '1/4 cup' },
      { name: 'yogurt', quantity: '1/2 cup' },
      { name: 'baking soda', quantity: '1/4 tsp' },
      { name: 'sugar', quantity: '1 tsp' },
      { name: 'salt', quantity: 'to taste' },
      { name: 'oil', quantity: 'for deep frying' }
    ],
    instructions: [
      'For Chola: Pressure cook the soaked chickpeas with salt and tea bags for 15-20 minutes until soft. Discard tea bags.',
      'Heat oil in a pan, sauté onions until golden brown. Add ginger-garlic paste and green chillies, cook for a minute.',
      'Add tomato puree and cook until oil separates. Add chana masala, turmeric, and red chilli powder. Cook for 2 minutes.',
      'Add the cooked chickpeas along with their water. Mash some chickpeas to thicken the gravy. Simmer for 15 minutes.',
      'For Bhatura: Mix all-purpose flour, semolina, baking soda, sugar, salt, and yogurt. Knead into a soft dough using warm water. Let it rest for 2-3 hours.',
      'Make small balls from the dough, roll them into an oval shape.',
      'Heat oil in a kadhai and deep fry the bhaturas on medium-high heat until they puff up and turn golden brown.',
      'Serve hot chola with fluffy bhaturas.'
    ],
    nutritionalInfo: { calories: '750 kcal', protein: '25g' },
  },
  {
    name: 'Shahi Paneer',
    cookingTime: 45,
    difficulty: 'Medium',
    servings: 4,
    tags: ['vegetarian', 'creamy', 'gluten-free', 'north indian', 'mughlai'],
    ingredients: [
      { name: 'paneer', quantity: '250g, cubed' },
      { name: 'onion', quantity: '2 medium, roughly chopped' },
      { name: 'tomato', quantity: '3 medium, roughly chopped' },
      { name: 'cashews', quantity: '15' },
      { name: 'ginger-garlic paste', quantity: '1 tbsp' },
      { name: 'fresh cream', quantity: '1/2 cup' },
      { name: 'milk', quantity: '1/2 cup' },
      { name: 'turmeric powder', quantity: '1/4 tsp' },
      { name: 'garam masala', quantity: '1 tsp' },
      { name: 'kasuri methi (dried fenugreek)', quantity: '1 tsp' },
      { name: 'sugar', quantity: '1/2 tsp' },
      { name: 'ghee or butter', quantity: '2 tbsp' },
      { name: 'salt', quantity: 'to taste' }
    ],
    instructions: [
      'Boil onions, tomatoes, and cashews in water for 10 minutes. Let it cool and then blend into a very smooth paste.',
      'Heat ghee/butter in a pan. Add ginger-garlic paste and sauté for a minute.',
      'Pour in the blended paste. Cook on medium heat for 10-12 minutes, stirring occasionally, until the paste thickens.',
      'Add turmeric powder, garam masala, and salt. Mix well and cook for another minute.',
      'Add milk and fresh cream, stirring continuously to avoid curdling. Bring to a gentle simmer.',
      'Add sugar and crushed kasuri methi.',
      'Gently add the paneer cubes. Simmer for 5 minutes, allowing the paneer to absorb the flavors.',
      'Serve hot, garnished with a swirl of cream.'
    ],
    nutritionalInfo: { calories: '450 kcal', protein: '22g' },
  },
  {
    name: 'Kadhai Paneer',
    cookingTime: 40,
    difficulty: 'Medium',
    servings: 4,
    tags: ['vegetarian', 'spicy', 'gluten-free', 'north indian'],
    ingredients: [
      { name: 'paneer', quantity: '250g, cubed' },
      { name: 'bell pepper (capsicum)', quantity: '1 large, cubed' },
      { name: 'onion', quantity: '2 medium, 1 cubed and 1 finely chopped' },
      { name: 'tomato', quantity: '3 large, pureed' },
      { name: 'coriander seeds', quantity: '1.5 tbsp' },
      { name: 'dried red chillies', quantity: '3-4' },
      { name: 'ginger-garlic paste', quantity: '1 tbsp' },
      { name: 'turmeric powder', quantity: '1/2 tsp' },
      { name: 'garam masala', quantity: '1 tsp' },
      { name: 'kasuri methi (dried fenugreek)', quantity: '1 tsp' },
      { name: 'oil', quantity: '3 tbsp' },
      { name: 'salt', quantity: 'to taste' }
    ],
    instructions: [
      'For Kadhai Masala: Dry roast coriander seeds and dried red chillies on low heat until fragrant. Let them cool and grind into a coarse powder.',
      'Heat 1 tbsp oil in a kadhai or wok. Sauté the cubed onions and bell peppers on high heat for 2-3 minutes until they are slightly charred but still crunchy. Remove and set aside.',
      'In the same kadhai, add the remaining 2 tbsp oil. Sauté the finely chopped onion until golden.',
      'Add ginger-garlic paste and cook for a minute. Add the tomato puree and cook until oil starts to separate.',
      'Add turmeric powder, salt, and the freshly ground Kadhai Masala. Mix well and cook for 2 minutes.',
      'Add about 1 cup of water, bring the gravy to a boil, then simmer for 5 minutes.',
      'Add the sautéed onions, bell peppers, and paneer cubes. Mix gently.',
      'Crush kasuri methi between your palms and add it to the gravy along with garam masala. Simmer for 2-3 more minutes.',
      'Serve hot, garnished with fresh cilantro.'
    ],
    nutritionalInfo: { calories: '380 kcal', protein: '20g' },
  },
  {
    name: 'Chilli Potato',
    cookingTime: 35,
    difficulty: 'Easy',
    servings: 2,
    tags: ['vegetarian', 'spicy', 'indo-chinese', 'snack'],
    ingredients: [
      { name: 'potato', quantity: '3 large, cut into fries' },
      { name: 'corn flour', quantity: '1/2 cup' },
      { name: 'all-purpose flour (maida)', quantity: '2 tbsp' },
      { name: 'bell pepper (capsicum)', quantity: '1, diced' },
      { name: 'onion', quantity: '1, diced' },
      { name: 'garlic', quantity: '4 cloves, minced' },
      { name: 'soy sauce', quantity: '2 tbsp' },
      { name: 'red chilli sauce', quantity: '1 tbsp' },
      { name: 'tomato ketchup', quantity: '2 tbsp' },
      { name: 'vinegar', quantity: '1 tsp' },
      { name: 'honey', quantity: '1 tbsp' },
      { name: 'spring onion', quantity: '2 tbsp, chopped' },
      { name: 'sesame seeds', quantity: '1 tsp' },
      { name: 'oil', quantity: 'for deep frying' }
    ],
    instructions: [
      'Boil potato fries for 5 minutes, drain and cool completely.',
      'In a bowl, mix corn flour, all-purpose flour, salt, and water to make a thin batter. Coat the potato fries.',
      'Deep fry the coated fries until golden and crisp. Drain and set aside.',
      'In a pan, heat 1 tbsp of oil. Sauté garlic, onion, and bell pepper for 2 minutes.',
      'Add soy sauce, red chilli sauce, ketchup, vinegar, and honey. Mix well.',
      'Create a corn flour slurry (1 tbsp corn flour + 2 tbsp water) and add to the pan to thicken the sauce.',
      'Add the fried potatoes to the sauce and toss to coat them evenly.',
      'Garnish with spring onions and sesame seeds. Serve immediately.'
    ],
    nutritionalInfo: { calories: '550 kcal', protein: '10g' },
  },
  {
    name: 'Veg Fried Rice',
    cookingTime: 25,
    difficulty: 'Easy',
    servings: 3,
    tags: ['vegetarian', 'quick', 'indo-chinese'],
    ingredients: [
      { name: 'cooked rice', quantity: '3 cups, cold' },
      { name: 'carrot', quantity: '1/2 cup, finely chopped' },
      { name: 'beans', quantity: '1/2 cup, finely chopped' },
      { name: 'bell pepper (capsicum)', quantity: '1/2 cup, finely chopped' },
      { name: 'spring onion', quantity: '1/2 cup, chopped' },
      { name: 'garlic', quantity: '3 cloves, minced' },
      { name: 'soy sauce', quantity: '2 tbsp' },
      { name: 'vinegar', quantity: '1 tsp' },
      { name: 'black pepper', quantity: '1/2 tsp' },
      { name: 'oil', quantity: '2 tbsp' }
    ],
    instructions: [
      'Heat oil in a wok or large pan on high heat.',
      'Add minced garlic and sauté for 30 seconds.',
      'Add all chopped vegetables (except spring onion greens) and stir-fry for 3-4 minutes until tender-crisp.',
      'Add the cold cooked rice and break any lumps. Stir-fry for 2 minutes.',
      'Add soy sauce, vinegar, and black pepper. Toss everything together until the rice is evenly coated.',
      'Add the chopped spring onion greens, toss for one final minute.',
      'Serve hot.'
    ],
    nutritionalInfo: { calories: '400 kcal', protein: '8g' },
  },
  {
    name: 'Veg Biryani',
    cookingTime: 60,
    difficulty: 'Medium',
    servings: 4,
    tags: ['vegetarian', 'main course', 'biryani'],
    ingredients: [
      { name: 'basmati rice', quantity: '1.5 cups, soaked for 30 mins' },
      { name: 'mixed vegetables', quantity: '2 cups (carrot, peas, beans, potato)' },
      { name: 'onion', quantity: '2 large, thinly sliced' },
      { name: 'yogurt', quantity: '1 cup' },
      { name: 'ginger-garlic paste', quantity: '1.5 tbsp' },
      { name: 'biryani masala', quantity: '2 tbsp' },
      { name: 'turmeric powder', quantity: '1/2 tsp' },
      { name: 'red chilli powder', quantity: '1 tsp' },
      { name: 'mint leaves', quantity: '1/4 cup, chopped' },
      { name: 'coriander leaves', quantity: '1/4 cup, chopped' },
      { name: 'saffron', quantity: 'a pinch, soaked in 2 tbsp milk' },
      { name: 'ghee', quantity: '3 tbsp' }
    ],
    instructions: [
      'Par-cook the soaked rice in salted water until it is 70% cooked. Drain and set aside.',
      'In a large bowl, marinate the mixed vegetables with yogurt, ginger-garlic paste, biryani masala, turmeric, and chilli powder for 30 minutes.',
      'In a heavy-bottomed pan, heat ghee and fry the sliced onions until they are golden brown and crisp (birista). Set half aside for garnish.',
      'In the same pan, add the marinated vegetables and cook for 10-12 minutes until they are partially cooked.',
      'Layer the cooked rice over the vegetable gravy. Sprinkle with chopped mint, coriander, fried onions, and saffron milk.',
      'Cover the pan with a tight-fitting lid and cook on low heat (dum) for 15-20 minutes.',
      'Gently fluff the biryani with a fork before serving. Serve hot with raita.'
    ],
    nutritionalInfo: { calories: '600 kcal', protein: '15g' },
  },
  {
    name: 'Poha',
    cookingTime: 20,
    difficulty: 'Easy',
    servings: 2,
    tags: ['vegetarian', 'breakfast', 'quick', 'healthy'],
    ingredients: [
      { name: 'thick poha (flattened rice)', quantity: '1.5 cups' },
      { name: 'onion', quantity: '1 medium, finely chopped' },
      { name: 'potato', quantity: '1 small, finely chopped' },
      { name: 'peanuts', quantity: '2 tbsp' },
      { name: 'mustard seeds', quantity: '1 tsp' },
      { name: 'turmeric powder', quantity: '1/2 tsp' },
      { name: 'sugar', quantity: '1 tsp' },
      { name: 'lemon juice', quantity: '1 tbsp' },
      { name: 'coriander leaves', quantity: '2 tbsp, chopped' },
      { name: 'oil', quantity: '2 tbsp' }
    ],
    instructions: [
      'Rinse the poha in a colander until it softens, then drain completely. Add salt and sugar, and mix gently.',
      'Heat oil in a pan. Add mustard seeds and let them splutter. Add peanuts and sauté until golden.',
      'Add chopped onions and sauté until translucent. Add chopped potatoes and cook until they are soft.',
      'Add turmeric powder and mix. Add the rinsed poha to the pan.',
      'Mix everything gently until the poha is well-coated and heated through, about 2-3 minutes.',
      'Turn off the heat. Add lemon juice and chopped coriander leaves. Mix well.',
      'Serve hot, garnished with sev or more coriander.'
    ],
    nutritionalInfo: { calories: '350 kcal', protein: '7g' },
  },
  {
    name: 'Dal Makhani',
    cookingTime: 120,
    difficulty: 'Medium',
    servings: 4,
    tags: ['vegetarian', 'creamy', 'punjabi', 'main course'],
    ingredients: [
      { name: 'whole black lentils (sabut urad)', quantity: '1 cup, soaked overnight' },
      { name: 'kidney beans (rajma)', quantity: '1/4 cup, soaked overnight' },
      { name: 'onion', quantity: '1 large, finely chopped' },
      { name: 'tomato puree', quantity: '1.5 cups' },
      { name: 'ginger-garlic paste', quantity: '1.5 tbsp' },
      { name: 'fresh cream', quantity: '1/2 cup' },
      { name: 'butter', quantity: '1/4 cup' },
      { name: 'kasuri methi (dried fenugreek)', quantity: '1 tsp' },
      { name: 'garam masala', quantity: '1 tsp' },
      { name: 'red chilli powder', quantity: '1 tsp' }
    ],
    instructions: [
      'Pressure cook the soaked lentils and kidney beans with salt until they are very soft and mushy (at least 30-40 minutes).',
      'In a separate pan, heat butter. Sauté the chopped onions until golden brown.',
      'Add ginger-garlic paste and cook for a minute. Add the tomato puree and cook until the mixture thickens and releases butter.',
      'Add red chilli powder and garam masala. Mix well.',
      'Pour this tempering over the cooked lentils. Mix and mash the lentils slightly to create a creamy texture.',
      'Simmer the dal on low heat for at least 30-40 minutes, adding water if it becomes too thick. The longer it simmers, the better the flavor.',
      'Stir in the fresh cream and crushed kasuri methi. Simmer for another 5 minutes.',
      'Serve hot with a dollop of butter.'
    ],
    nutritionalInfo: { calories: '500 kcal', protein: '20g' },
  },
  {
    name: 'Dal Chawal',
    cookingTime: 30,
    difficulty: 'Easy',
    servings: 2,
    tags: ['vegetarian', 'comfort food', 'healthy', 'quick'],
    ingredients: [
      { name: 'toor dal (pigeon peas)', quantity: '1 cup' },
      { name: 'rice', quantity: '1 cup' },
      { name: 'onion', quantity: '1 small, chopped' },
      { name: 'tomato', quantity: '1 small, chopped' },
      { name: 'ginger-garlic paste', quantity: '1 tsp' },
      { name: 'turmeric powder', quantity: '1/2 tsp' },
      { name: 'mustard seeds', quantity: '1/2 tsp' },
      { name: 'cumin seeds', quantity: '1/2 tsp' },
      { name: 'ghee', quantity: '2 tbsp' }
    ],
    instructions: [
      'Wash and pressure cook the toor dal with turmeric and salt until soft (about 10-15 minutes).',
      'Wash and cook the rice separately with 2 cups of water until fluffy.',
      'For the tempering (tadka): Heat ghee in a small pan. Add mustard and cumin seeds and let them crackle.',
      'Add chopped onions and sauté until translucent. Add ginger-garlic paste and tomatoes and cook until soft.',
      'Pour this tempering over the cooked dal and mix well. Simmer for 5 minutes.',
      'Serve the hot dal over the cooked rice (chawal).'
    ],
    nutritionalInfo: { calories: '450 kcal', protein: '18g' },
  },
  {
    name: 'Paneer Butter Masala',
    cookingTime: 40,
    difficulty: 'Easy',
    servings: 4,
    tags: ['vegetarian', 'creamy', 'punjabi', 'main course'],
    ingredients: [
      { name: 'paneer', quantity: '250g, cubed' },
      { name: 'tomato', quantity: '4 large, pureed' },
      { name: 'cashews', quantity: '12, soaked in warm water' },
      { name: 'ginger-garlic paste', quantity: '1 tbsp' },
      { name: 'fresh cream', quantity: '1/2 cup' },
      { name: 'butter', quantity: '3 tbsp' },
      { name: 'red chilli powder', quantity: '1 tsp' },
      { name: 'garam masala', quantity: '1 tsp' },
      { name: 'kasuri methi (dried fenugreek)', quantity: '1 tsp' }
    ],
    instructions: [
      'Blend the soaked cashews into a fine paste.',
      'Heat butter in a pan. Add ginger-garlic paste and sauté for a minute.',
      'Add the tomato puree and cook for 10-12 minutes until it thickens and the raw smell disappears.',
      'Add the cashew paste and cook for another 5 minutes, stirring continuously.',
      'Add red chilli powder, garam masala, and salt. Mix well.',
      'Stir in the fresh cream and about 1 cup of water to adjust the consistency. Bring to a simmer.',
      'Add the paneer cubes and crushed kasuri methi. Simmer for 5 minutes.',
      'Serve hot with naan or rice.'
    ],
    nutritionalInfo: { calories: '480 kcal', protein: '21g' },
  },
  {
    name: 'Mix Veg',
    cookingTime: 30,
    difficulty: 'Easy',
    servings: 4,
    tags: ['vegetarian', 'healthy', 'quick'],
    ingredients: [
      { name: 'mixed vegetables', quantity: '3 cups (carrot, peas, beans, cauliflower, potato)' },
      { name: 'onion', quantity: '1 large, chopped' },
      { name: 'tomato', quantity: '2 medium, chopped' },
      { name: 'ginger-garlic paste', quantity: '1 tbsp' },
      { name: 'turmeric powder', quantity: '1/2 tsp' },
      { name: 'red chilli powder', quantity: '1 tsp' },
      { name: 'coriander powder', quantity: '1.5 tsp' },
      { name: 'garam masala', quantity: '1/2 tsp' },
      { name: 'oil', quantity: '3 tbsp' }
    ],
    instructions: [
      'Heat oil in a pan. Add chopped onions and sauté until golden brown.',
      'Add ginger-garlic paste and cook for one minute.',
      'Add chopped tomatoes and cook until they become soft and mushy.',
      'Add all the spice powders: turmeric, red chilli, and coriander powder. Sauté for a minute.',
      'Add all the mixed vegetables and salt. Mix well to coat the vegetables with the masala.',
      'Cover the pan and cook on low-medium heat for 15-20 minutes, or until the vegetables are tender. Stir occasionally.',
      'Sprinkle garam masala on top and mix.',
      'Serve hot with roti or paratha.'
    ],
    nutritionalInfo: { calories: '250 kcal', protein: '6g' },
  },
  {
    name: 'Malai Kofta',
    cookingTime: 50,
    difficulty: 'Hard',
    servings: 4,
    tags: ['vegetarian', 'creamy', 'special occasion'],
    ingredients: [
      { name: 'potato', quantity: '3, boiled and mashed' },
      { name: 'paneer', quantity: '200g, grated' },
      { name: 'corn flour', quantity: '3 tbsp' },
      { name: 'cashews and raisins', quantity: '2 tbsp, chopped, for stuffing' },
      { name: 'onion', quantity: '2 large, for gravy' },
      { name: 'tomato puree', quantity: '1 cup, for gravy' },
      { name: 'cashew paste', quantity: '1/4 cup, for gravy' },
      { name: 'fresh cream', quantity: '1/2 cup, for gravy' },
      { name: 'garam masala', quantity: '1 tsp' },
      { name: 'oil', quantity: 'for deep frying' }
    ],
    instructions: [
      'For Kofta: Mix mashed potatoes, grated paneer, corn flour, and salt to form a dough. Make small balls, stuff them with chopped cashews and raisins, and shape them.',
      'Deep fry the koftas until they are golden brown. Keep them aside.',
      'For Gravy: Heat oil in a pan, sauté onions until golden. Add ginger-garlic paste, then tomato puree and cook until oil separates.',
      'Add cashew paste and cook for 5 minutes. Add turmeric, red chilli powder, and garam masala.',
      'Add water and fresh cream to form a smooth, rich gravy. Simmer for 10 minutes.',
      'Just before serving, gently place the fried koftas into the hot gravy. Do not boil after adding koftas.',
      'Garnish with cream and serve immediately.'
    ],
    nutritionalInfo: { calories: '600 kcal', protein: '18g' },
  },
  {
    name: 'Handi Paneer',
    cookingTime: 40,
    difficulty: 'Medium',
    servings: 4,
    tags: ['vegetarian', 'creamy', 'restaurant style'],
    ingredients: [
      { name: 'paneer', quantity: '250g, cubed' },
      { name: 'yogurt', quantity: '1/2 cup, whisked' },
      { name: 'onion', quantity: '2 medium, finely chopped' },
      { name: 'tomato', quantity: '2 medium, pureed' },
      { name: 'cashews', quantity: '10-12, made into a paste' },
      { name: 'fresh cream', quantity: '1/4 cup' },
      { name: 'ginger-garlic paste', quantity: '1 tbsp' },
      { name: 'turmeric powder', quantity: '1/2 tsp' },
      { name: 'red chilli powder', quantity: '1 tsp' },
      { name: 'coriander powder', quantity: '1 tbsp' },
      { name: 'garam masala', quantity: '1 tsp' },
      { name: 'oil', quantity: '2 tbsp' }
    ],
    instructions: [
      'Heat oil in a handi or deep pan. Sauté the onions until golden brown.',
      'Add ginger-garlic paste and cook for a minute.',
      'Add the tomato puree and cook until oil starts to separate from the masala.',
      'Add turmeric, red chilli, and coriander powder. Sauté for another minute.',
      'Lower the heat and slowly add the whisked yogurt, stirring continuously to prevent curdling.',
      'Add the cashew paste and cook for 3-4 minutes until the gravy thickens.',
      'Add paneer cubes, fresh cream, and salt. Mix gently.',
      'Cover and simmer on low heat for 5-7 minutes. Sprinkle with garam masala before serving.'
    ],
    nutritionalInfo: { calories: '470 kcal', protein: '23g' },
  },
  {
    name: 'Dal Fry',
    cookingTime: 30,
    difficulty: 'Easy',
    servings: 3,
    tags: ['vegetarian', 'healthy', 'lentils'],
    ingredients: [
      { name: 'toor dal (pigeon peas)', quantity: '1 cup, rinsed' },
      { name: 'onion', quantity: '1 medium, finely chopped' },
      { name: 'tomato', quantity: '1 large, finely chopped' },
      { name: 'ginger', quantity: '1 inch, grated' },
      { name: 'garlic', quantity: '3 cloves, minced' },
      { name: 'green chilli', quantity: '1, slit' },
      { name: 'turmeric powder', quantity: '1/2 tsp' },
      { name: 'cumin seeds', quantity: '1 tsp' },
      { name: 'dried red chilli', quantity: '2' },
      { name: 'ghee', quantity: '2 tbsp' },
      { name: 'coriander leaves', quantity: 'for garnish' }
    ],
    instructions: [
      'Pressure cook the toor dal with turmeric and salt in 3 cups of water until soft and mushy (about 3-4 whistles).',
      'Heat ghee in a pan for the tempering (tadka). Add cumin seeds and dried red chillies.',
      'When the seeds splutter, add the ginger, garlic, and green chilli. Sauté for a minute.',
      'Add the chopped onions and cook until they turn translucent and soft.',
      'Add the chopped tomatoes and cook until they turn mushy and oil separates.',
      'Pour this tempering over the cooked dal. Mix well.',
      'Bring the dal to a boil and simmer for 5 minutes to allow flavors to meld.',
      'Garnish with fresh coriander leaves and serve hot.'
    ],
    nutritionalInfo: { calories: '350 kcal', protein: '15g' },
  },
  {
    name: 'Aloo Tamatar',
    cookingTime: 25,
    difficulty: 'Easy',
    servings: 3,
    tags: ['vegetarian', 'vegan', 'quick', 'curry'],
    ingredients: [
      { name: 'potato', quantity: '3 medium, boiled and cubed' },
      { name: 'tomato', quantity: '3 medium, pureed' },
      { name: 'onion', quantity: '1 small, finely chopped' },
      { name: 'ginger paste', quantity: '1 tsp' },
      { name: 'cumin seeds', quantity: '1 tsp' },
      { name: 'turmeric powder', quantity: '1/2 tsp' },
      { name: 'red chilli powder', quantity: '1 tsp' },
      { name: 'coriander powder', quantity: '1 tsp' },
      { name: 'oil', quantity: '2 tbsp' }
    ],
    instructions: [
      'Heat oil in a pan. Add cumin seeds and let them crackle.',
      'Add the finely chopped onion and sauté until golden.',
      'Add ginger paste and cook for 30 seconds.',
      'Add the tomato puree, turmeric, red chilli, and coriander powder. Cook until oil separates from the masala.',
      'Add the boiled potato cubes and salt. Mix gently to coat the potatoes.',
      'Pour in 1 cup of water, bring to a boil, then cover and simmer for 5-7 minutes.',
      'Garnish with fresh coriander and serve with roti or rice.'
    ],
    nutritionalInfo: { calories: '280 kcal', protein: '5g' },
  },
  {
    name: 'Aloo Matar',
    cookingTime: 30,
    difficulty: 'Easy',
    servings: 4,
    tags: ['vegetarian', 'vegan', 'curry', 'gluten-free'],
    ingredients: [
      { name: 'potato', quantity: '3 medium, cubed' },
      { name: 'green peas (matar)', quantity: '1 cup' },
      { name: 'onion', quantity: '1 large, finely chopped' },
      { name: 'tomato puree', quantity: '1 cup' },
      { name: 'ginger-garlic paste', quantity: '1 tbsp' },
      { name: 'turmeric powder', quantity: '1/2 tsp' },
      { name: 'red chilli powder', quantity: '1 tsp' },
      { name: 'garam masala', quantity: '1 tsp' },
      { name: 'oil', quantity: '2 tbsp' }
    ],
    instructions: [
      'Heat oil in a pressure cooker or pan. Sauté onions until translucent.',
      'Add ginger-garlic paste and cook for a minute.',
      'Add tomato puree, turmeric, and red chilli powder. Cook until oil separates.',
      'Add the cubed potatoes, green peas, and salt. Sauté for 2 minutes.',
      'Add 1.5 cups of water and stir. If using a pressure cooker, cook for 2 whistles. If in a pan, cover and cook until potatoes are tender.',
      'Once cooked, add garam masala and mix gently.',
      'Garnish with coriander and serve hot.'
    ],
    nutritionalInfo: { calories: '320 kcal', protein: '8g' },
  },
  {
    name: 'Dum Aloo',
    cookingTime: 50,
    difficulty: 'Medium',
    servings: 4,
    tags: ['vegetarian', 'curry', 'special occasion'],
    ingredients: [
      { name: 'baby potatoes', quantity: '500g' },
      { name: 'yogurt', quantity: '1 cup, whisked' },
      { name: 'onion paste', quantity: '1 cup' },
      { name: 'tomato puree', quantity: '1 cup' },
      { name: 'cashew paste', quantity: '2 tbsp' },
      { name: 'ginger-garlic paste', quantity: '1 tbsp' },
      { name: 'Kashmiri red chilli powder', quantity: '1.5 tsp' },
      { name: 'fennel powder (saunf)', quantity: '1 tsp' },
      { name: 'garam masala', quantity: '1 tsp' },
      { name: 'oil', quantity: 'for frying + 2 tbsp' }
    ],
    instructions: [
      'Boil baby potatoes until 80% cooked. Peel and prick them all over with a fork.',
      'Heat oil and shallow fry the potatoes until golden brown. Set aside.',
      'In a pan, heat 2 tbsp oil. Add onion paste and cook until golden.',
      'Add ginger-garlic paste, cook for a minute. Then add tomato puree and cook until oil separates.',
      'Lower the heat, add whisked yogurt, stirring continuously. Add cashew paste, red chilli powder, fennel powder, and salt. Cook for 5 minutes.',
      'Add the fried baby potatoes and 1 cup of water. Bring to a boil.',
      'Cover the pan with a tight lid (dum style) and cook on very low heat for 15 minutes.',
      'Finish with garam masala before serving.'
    ],
    nutritionalInfo: { calories: '450 kcal', protein: '10g' },
  },
  {
    name: 'Aloo Paneer',
    cookingTime: 35,
    difficulty: 'Easy',
    servings: 4,
    tags: ['vegetarian', 'curry', 'quick'],
    ingredients: [
      { name: 'potato', quantity: '2 large, boiled and cubed' },
      { name: 'paneer', quantity: '200g, cubed' },
      { name: 'onion', quantity: '1 large, chopped' },
      { name: 'tomato puree', quantity: '1 cup' },
      { name: 'ginger-garlic paste', quantity: '1 tbsp' },
      { name: 'turmeric powder', quantity: '1/2 tsp' },
      { name: 'red chilli powder', quantity: '1 tsp' },
      { name: 'garam masala', quantity: '1 tsp' },
      { name: 'oil', quantity: '3 tbsp' }
    ],
    instructions: [
      'Heat oil in a pan. Optionally, lightly fry the paneer and potato cubes until golden and set aside.',
      'In the same oil, sauté onions until translucent.',
      'Add ginger-garlic paste and cook for a minute.',
      'Add tomato puree and all spice powders (turmeric, red chilli). Cook until the masala thickens and releases oil.',
      'Add the fried potato and paneer cubes. Mix gently to coat with the masala.',
      'Pour in 1.5 cups of water and add salt. Bring to a simmer.',
      'Cover and cook for 10 minutes on low heat.',
      'Sprinkle with garam masala and garnish with coriander before serving.'
    ],
    nutritionalInfo: { calories: '390 kcal', protein: '16g' },
  },
  {
    name: 'Mushroom Matar',
    cookingTime: 30,
    difficulty: 'Easy',
    servings: 3,
    tags: ['vegetarian', 'vegan-adaptable', 'curry'],
    ingredients: [
      { name: 'mushroom', quantity: '250g, sliced' },
      { name: 'green peas (matar)', quantity: '1 cup' },
      { name: 'onion', quantity: '2 medium, finely chopped' },
      { name: 'tomato puree', quantity: '1 cup' },
      { name: 'cashew paste', quantity: '2 tbsp (optional)' },
      { name: 'fresh cream', quantity: '2 tbsp (optional)' },
      { name: 'ginger-garlic paste', quantity: '1 tbsp' },
      { name: 'turmeric powder', quantity: '1/2 tsp' },
      { name: 'coriander powder', quantity: '1 tbsp' },
      { name: 'garam masala', quantity: '1 tsp' },
      { name: 'oil', quantity: '2 tbsp' }
    ],
    instructions: [
      'Heat oil in a pan. Sauté onions until light golden.',
      'Add ginger-garlic paste and cook until the raw smell is gone.',
      'Add tomato puree and cook for 5-7 minutes until it thickens.',
      'Add turmeric, coriander powder, and salt. Mix and cook for a minute.',
      'Stir in the cashew paste (if using) and cook for another 2 minutes.',
      'Add the sliced mushrooms and green peas. Sauté for 5 minutes.',
      'Add 1 cup of water, cover, and let it simmer for 10 minutes until mushrooms and peas are cooked.',
      'Stir in fresh cream (if using) and garam masala. Cook for 1 more minute.',
      'Garnish and serve hot.'
    ],
    nutritionalInfo: { calories: '280 kcal', protein: '9g' },
  },
  {
    name: 'Garlic and Oil Pasta (Aglio e Olio)',
    cookingTime: 15,
    difficulty: 'Easy',
    servings: 2,
    tags: ['vegetarian', 'vegan', 'quick', 'italian'],
    ingredients: [
      { name: 'spaghetti', quantity: '200g' },
      { name: 'garlic', quantity: '5-6 cloves, thinly sliced' },
      { name: 'olive oil', quantity: '1/4 cup' },
      { name: 'red pepper flakes', quantity: '1/2 tsp (or to taste)' },
      { name: 'parsley', quantity: '1/4 cup, freshly chopped' },
      { name: 'salt', quantity: 'to taste' }
    ],
    instructions: [
      'Cook spaghetti in a large pot of heavily salted boiling water until al dente.',
      'Just before draining the pasta, reserve about 1 cup of the starchy pasta water.',
      'While pasta is cooking, heat olive oil in a large skillet over medium-low heat.',
      'Add the sliced garlic and red pepper flakes. Cook slowly, stirring often, until the garlic is fragrant and lightly golden. Do not let it burn.',
      'Drain the pasta and add it directly to the skillet with the garlic and oil.',
      'Add about 1/4 cup of the reserved pasta water. Toss vigorously to create a creamy sauce that coats the pasta.',
      'Stir in the fresh parsley and season with salt. Serve immediately.'
    ],
    nutritionalInfo: { calories: '500 kcal', protein: '12g' },
  },
  {
    name: 'Street Style Maggi',
    cookingTime: 10,
    difficulty: 'Easy',
    servings: 1,
    tags: ['vegetarian', 'quick', 'snack', 'noodles'],
    ingredients: [
      { name: 'Maggi noodles', quantity: '1 packet' },
      { name: 'onion', quantity: '1/4, finely chopped' },
      { name: 'tomato', quantity: '1/4, finely chopped' },
      { name: 'green peas (matar)', quantity: '2 tbsp' },
      { name: 'turmeric powder', quantity: 'a pinch' },
      { name: 'red chilli powder', quantity: '1/4 tsp' },
      { name: 'oil', quantity: '1 tsp' }
    ],
    instructions: [
      'Heat oil in a small pan. Sauté the onions until translucent.',
      'Add the tomatoes and green peas and cook for 2 minutes.',
      'Add turmeric and red chilli powder and mix well.',
      'Pour in 1.5 cups of water and bring to a boil.',
      'Break the Maggi noodle cake into the boiling water. Add the Tastemaker sachet that comes with the noodles.',
      'Stir and cook for 2-3 minutes until the noodles are soft and the soup has thickened to your liking.',
      'Serve hot immediately.'
    ],
    nutritionalInfo: { calories: '350 kcal', protein: '8g' },
  }
];
// 4. Seed function
async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    // Clear existing
    await Recipe.deleteMany({});
    console.log("Old recipes cleared!");

    // Insert new
    await Recipe.insertMany(recipes);
    console.log("New recipes added!");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedDB();
