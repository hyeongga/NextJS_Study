/* Dynamic Routes */
import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
};

export default Detail;
