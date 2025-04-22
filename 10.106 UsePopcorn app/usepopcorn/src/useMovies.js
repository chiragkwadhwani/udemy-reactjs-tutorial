import { useEffect, useState } from "react";

const KEY = "f84fc31d";

export function useMovies(query) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        // callback?.();

        const abortController = new AbortController();
    
        async function fetchMovies() {
          try { 
            setIsLoading(true);
            setError("");
            const res = await fetch(
              `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`, {signal: abortController.signal}
            );
    
            if (!res.ok) {throw new Error("Something went wrong with fetching movies");}
    
            const data = await res.json();
            if (data.Response === "False") {
              throw new Error("Movie Not Found");
            }
            setMovies(data.Search);
            setError("");
          } catch (err) {
            console.log(err.message);
            if (err.name !== "AbortError") {
              setError(err.message);
            }
          } finally {
            setIsLoading(false);
          }
        }
        if (query.length < 3) {
          setMovies([]);
          setError("");
          return;
        }

        fetchMovies();
    
        return function() {
          abortController.abort();
        }
      }, [query]);
      
      return { movies, isLoading, error };
};