// 파일명이 주소로 들어감
// index는 예외 ; 홈페이지
// pages폴더안에 작성해야함. export default 작성.

import Seo from "@/components/Seo";

export default function Home() {
  return (
    <div>
      <Seo title="Home" />
      <h1 className="active">Hello</h1>
    </div>
  );
}
