import { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import axios from 'axios';
import PhotoItem from './components/ImageCard';
import LoadingSpinner from './components/LoadingSpinner';

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
// const UNSPLASH_ACCESS_KEY = process.env.VITE_UNSPLASH_ACCESS_KEY;
const IMAGES_PER_PAGE = 12;

function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef();
  const lastPhotoRef = useCallback(node => {
    if (loading) return;

    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  const fetchPhotos = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`https://api.unsplash.com/photos`, {
        headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
        },
        params: {
            page: page,
            per_page: IMAGES_PER_PAGE
        }
    });

      // const response = await fetch(
      //   `https://api.unsplash.com/photos?page=${page}&per_page=${IMAGES_PER_PAGE}`,
      //   {
      //     headers: {
      //       Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
      //     }
      //   }
      // );

      if (response.status!== 200){
      console.log(response.status);
        throw new Error('Failed to fetch photos');
      }

      // const data = await response.json();
      setPhotos(prevPhotos => [...prevPhotos, ...response.data]);
      setHasMore(response.data.length === IMAGES_PER_PAGE);
    } catch (err) {
      setError('Error loading images. Please try again later.');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  return (
    <div className="app">
      <div id='app-heading'>
        <h1>Photo Gallery</h1>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div
            ref={index === photos.length - 1 ? lastPhotoRef : null}
            key={`${photo.id}-${page}-${index}`}
            className="photo-item"
          >
            <PhotoItem photo={photo} />
          </div>
        ))}
      </div>

      {loading && (
        <LoadingSpinner/>
      )}
    </div>
  );
}

export default App;