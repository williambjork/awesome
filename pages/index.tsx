import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CardList from "../components/CardList";
import { useRouter } from "next/router";
import Image from "next/image";
import globeblack from "../src/images/WorldRanker2-white.png";

<<<<<<< HEAD
const Home: NextPage = ({ games }) => {
  const router = useRouter();

  console.log(games);

=======

const Home: NextPage = () => {
  const router = useRouter();

  

>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<<<<<<< HEAD
      <main className="bgmeshdark flex">
=======
      <main className="bgmeshdark flex ">
>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342
        
       

        <div className=" pb-5 flex flex-col justify-center items-center h-screen w-screen  scrollbar-hide">
          
<<<<<<< HEAD
        <Image src={globeblack}  priority="true"  height={400} width={840} />
          
        <button className="text-white font-oswald hover:underline  pt-9"
                onClick={() => {router.push("/home")}}>Enter</button>
=======
        <Image src={globeblack}  priority={true}  height={400} width={840} />
          
        <button className="text-white font-oswald hover:underline  pt-9"
                onClick={() => {router.push("/home")}}>Enter</button>

                
>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342
          
        </div>
      </main>
    </div>
  );
};
<<<<<<< HEAD

export async function getStaticProps() {
  const url =
    "https://api.rawg.io/api/games?key=f6d4a95732b6497e929238e5994121e6&dates=2020-09-12,2022-07-30";
  const response = await fetch(url);
  const games = await response.json();

  return {
    props: { games: games.results },
  };
}

=======


>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342
export default Home;
