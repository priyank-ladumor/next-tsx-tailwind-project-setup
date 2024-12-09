'use client';

import { useState, useEffect } from 'react';
import Loading from 'src/components/loader/loader';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div>
      {loading ? <Loading /> : <p>Hello</p>}
    </div>
  );
}

