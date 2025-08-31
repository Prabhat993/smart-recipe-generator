export default function RecipeList({ recipes }) {
  if (!recipes?.length) return <div>No matches yet. Try adding ingredients.</div>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
      {recipes.map((r) => (
        <div key={r._id} style={{ border: '1px solid #eee', borderRadius: 12, padding: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ margin: 0 }}>{r.name}</h3>
            <span title="Match score">{r.score}%</span>
          </div>
          <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>
            {r.difficulty} • {r.cookingTime} min • serves {r.servings}
          </div>
          {r.tags?.length ? (
            <div style={{ marginTop: 8, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {r.tags.map((t, idx) => (
                <span key={idx} style={{ fontSize: 12, background: '#f2f2f2', padding: '2px 8px', borderRadius: 999 }}>{t}</span>
              ))}
            </div>
          ) : null}
          <div style={{ marginTop: 8 }}>
            <strong>Ingredients:</strong>
            <ul style={{ margin: '6px 0 0 16px' }}>
              {r.ingredients?.map((i, idx) => (
                <li key={idx}>{i.quantity} {i.name}</li>
              ))}
            </ul>
          </div>
          <details style={{ marginTop: 8 }}>
            <summary>Instructions</summary>
            <ol style={{ marginTop: 6 }}>
              {r.instructions?.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </details>
        </div>
      ))}
    </div>
  );
}