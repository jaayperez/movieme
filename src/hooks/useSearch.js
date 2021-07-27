import { useState } from 'react';
import Fuse from 'fuse.js';

function search({ fuse, data, term }) {
  const results = fuse.search(term);
  return term ? results : data;
}

function useSearch({ data = [], options }) {
  const [searchTerm, setSearchTerm] = useState('');
  const fuse = new Fuse(data, options);
  const results = search({ fuse, data, term: searchTerm });
  const reset = () => setSearchTerm('');
  return { results, search: setSearchTerm, searchTerm, reset };
}

export default useSearch;
