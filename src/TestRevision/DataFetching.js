import { useState, useEffect } from 'react';

function fetchFakeColor() {
  return Promise.resolve(['red', 'pink', 'blue']);
}

function DataFetching() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetchFakeColor().then((c) => setColors(c));
  }, []);

  const renderedColorList = colors.map((color) => {
    return <li key={color}>{color}</li>;
  });

  return <ul>{renderedColorList}</ul>;
}

export default DataFetching;
