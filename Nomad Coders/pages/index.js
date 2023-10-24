// 파일명이 주소로 들어감
// index는 예외 ; 홈페이지
// pages폴더안에 작성해야함. export default 작성.

import Seo from "@/components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id) => {
    //push사용시 URL을 string, 객체로 전송 가능
    //router.push(`/movies/${id}`); // <- string
    router.push({
      pathname: `/movies/${id}`,
      query: {
        id,
        title: "potataos",
      },
    }); //object
  };
  return (
    <div className="container">
      <Seo title="Home" />

      {results?.map((movie) => (
        <div
          onClick={() => {
            onClick(movie.id);
          }}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.id}`} key={movie.id}>
              {movie.original_title}
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

/*getServerSideProps 함수명 변경 불가 ; 서버에서 작동하는 코드(client에 표기되지 않음)*/
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
