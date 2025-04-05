import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  return (
    <>
      <h1>Hi</h1>
    </>
  );
};

export default Home;
