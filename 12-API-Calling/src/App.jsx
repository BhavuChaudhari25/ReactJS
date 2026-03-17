import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPhotos = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('https://picsum.photos/v2/list?limit=30');
      setPhotos(data);
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const uniqueAuthors = new Set(photos.map(p => p.author)).size;

  return (
    <div style={styles.root}>
      <div style={styles.header}>
        <div>
          <p style={styles.subtitle}>Photo Archive</p>
          <h1 style={styles.title}>Picsum Gallery</h1>
        </div>
        <button style={styles.btn} onClick={getPhotos} disabled={loading}>
          <span style={{ ...styles.dot, background: loading ? '#fca5a5' : '#6ee7b7' }} />
          {loading ? 'Fetching…' : photos.length ? 'Reload' : 'Load Photos'}
        </button>
      </div>

      {photos.length > 0 && (
        <div style={styles.statsBar}>
          <span>Total <strong>{photos.length}</strong></span>
          <span>Photographers <strong>{uniqueAuthors}</strong></span>
        </div>
      )}

      {photos.length === 0 && !loading ? (
        <div style={styles.empty}>
          <div style={styles.emptyIcon}>📷</div>
          <p style={{ color: '#888', fontSize: 14 }}>Press "Load Photos" to fetch the collection</p>
        </div>
      ) : (
        <div style={styles.grid}>
          {photos.map((item, i) => (
            <div key={item.id} style={{ ...styles.card, animationDelay: `${i * 35}ms` }}>
              <div style={styles.imgWrap}>
                <img
                  src={item.download_url.replace(/\/\d+\/\d+$/, '/400/300')}
                  alt={item.author}
                  style={styles.img}
                  loading="lazy"
                />
                <span style={styles.badge}>#{item.id}</span>
              </div>
              <div style={styles.cardBody}>
                <p style={styles.author}>{item.author}</p>
                <div style={styles.meta}>
                  <span>Photo</span>
                  <span>{item.width} × {item.height}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  root: { fontFamily: "'DM Sans', sans-serif", padding: '2rem 1.5rem', minHeight: '100vh', background: '#0e0e0e', color: '#f0ede8' },
  header: { display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem', paddingBottom: '1.25rem', borderBottom: '0.5px solid #2a2a2a' },
  subtitle: { fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', marginBottom: 4 },
  title: { fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 600, letterSpacing: '-0.5px', color: '#f0ede8' },
  btn: { display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: '#f0ede8', color: '#0e0e0e', border: 'none', borderRadius: 100, fontSize: 13, fontWeight: 500, cursor: 'pointer', letterSpacing: '0.02em' },
  dot: { width: 7, height: 7, borderRadius: '50%', display: 'inline-block', flexShrink: 0 },
  statsBar: { display: 'flex', gap: 24, fontSize: 12, color: '#888', letterSpacing: '0.05em', marginBottom: '1.5rem' },
  empty: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 260, border: '0.5px dashed #2a2a2a', borderRadius: 16, gap: 10 },
  emptyIcon: { width: 48, height: 48, background: '#1a1a1a', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 },
  card: { borderRadius: 12, overflow: 'hidden', border: '0.5px solid #2a2a2a', background: '#141414', transition: 'transform 0.22s ease, border-color 0.2s' },
  imgWrap: { position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: '#1a1a1a' },
  img: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  badge: { position: 'absolute', top: 10, right: 10, background: 'rgba(0,0,0,0.55)', color: '#fff', fontSize: 11, padding: '3px 8px', borderRadius: 100 },
  cardBody: { padding: '12px 14px 14px' },
  author: { fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 600, color: '#f0ede8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginBottom: 4 },
  meta: { display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#666', letterSpacing: '0.03em' },
};

export default App;