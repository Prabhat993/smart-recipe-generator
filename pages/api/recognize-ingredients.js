// pages/api/recognize-ingredients.js
export const config = {
  api: {
    bodyParser: { sizeLimit: '8mb' },
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  const apiKey = process.env.CLARIFAI_API_KEY;
  const workflowId = process.env.CLARIFAI_WORKFLOW_ID; 

  if (!apiKey || !workflowId) {
    return res.status(500).json({ message: 'Clarifai not configured (missing key or workflow id)' });
  }

  try {
    const { imageBase64 } = req.body || {};
    if (!imageBase64) {
      return res.status(400).json({ message: 'imageBase64 is required' });
    }

    const response = await fetch(`https://api.clarifai.com/v2/workflows/${encodeURIComponent(workflowId)}/results`, {
      method: 'POST',
      headers: {
        'Authorization': `Key ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: [
          {
            data: {
              image: { base64: imageBase64 },
            },
          },
        ],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('Clarifai error:', text);
      return res.status(502).json({ message: 'Clarifai request failed' });
    }

    const data = await response.json();
    const concepts = data?.results?.[0]?.outputs?.[0]?.data?.concepts || [];
    const ingredients = concepts
      .filter((c) => (c.value || 0) >= 0.85)
      .map((c) => c.name.toLowerCase());

    return res.status(200).json({ ingredients });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
}