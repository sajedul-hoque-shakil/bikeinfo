'use client';
import Data from '../../../data.json';
import React from 'react';

const Page = ({ params }) => {
  const [resolvedParams, setResolvedParams] = React.useState(null);

  React.useEffect(() => {
    let isMounted = true;

    // Ensure params is resolved properly
    if (params && typeof params.then === 'function') {
      params.then((resolved) => {
        if (isMounted) setResolvedParams(resolved);
      });
    } else {
      setResolvedParams(params); // If params is already resolved
    }

    return () => {
      isMounted = false; // Cleanup to avoid state updates after unmount
    };
  }, [params]);

  if (!resolvedParams) return <div>Loading...</div>;

  const { id } = resolvedParams;
  const td1 = Data?.[0]?.tranding || null;
  const td2 = Data?.[0]?.populars || null;
  const td3 = Data?.[0]?.electric || null;
  const td4 = Data?.[0]?.upcoming || null;

  console.log('Resolved ID:', id);
  console.log('Trending ID:', td1?.id);

  return (
    <section>
      {td1 && td1.id === id ? (
        <h1>{td1.name}</h1>
      ) : (
        <p>{td1 ? td1.name : 'none'}</p>
      )}
    </section>
  );
};

export default Page;
