import { useEffect } from "react";
import { useChuckNorrisStore } from "./store/chuckNorris";

export const ChuckNorris = () => {
  const { item, randomQuote, loading } = useChuckNorrisStore((state) => state);

  useEffect(() => {
    randomQuote();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div>
        <button onClick={randomQuote}>Random</button>
      </div>
      {item &&
        (loading ? (
          <div>Loading data....</div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div>Value: {item.value}</div>
          </div>
        ))}
    </div>
  );
};
