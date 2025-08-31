import { useState } from 'react';
import Spinner from './Spinner';

export default function ImageUploader({ onIngredientsDetected }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function toBase64(file) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function handleFileChange(e) {
    setError('');
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    try {
      const base64 = await toBase64(file);
      const res = await fetch('/api/recognize-ingredients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: base64 }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Failed to recognize');
      onIngredientsDetected(data.ingredients || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ border: '1px dashed #bbb', padding: '12px', borderRadius: 8 }}>
      <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>Upload an image of ingredients</label>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {loading && <div style={{ marginTop: 8 }}><Spinner /> Recognizing…</div>}
      {error && <div style={{ marginTop: 8, color: 'crimson' }}>{error}</div>}
    </div>
  );
}