/* Dynamic Routes */
import { useRouter } from "next/router";
import Seo from "@/components/Seo";

const Detail = ({ params }) => {
  const router = useRouter(); //CSR : 프론트 안에서만 작동
  const [title, id] = params || []; //처음 빈배열을 렌더링해주고, JS 반영

  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default Detail;

//view-source에 params모두 표기됨
export function getServerSideProps({ params: { params } }) {
  console.log(params);
  return {
    props: { params },
  };
}
