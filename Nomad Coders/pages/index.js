// 파일명이 주소로 들어감
// index는 예외 ; 홈페이지
// pages폴더안에 작성해야함. export default 작성.

import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
      console.log(results);
    })();
  }, []);

  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>...Loading</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
