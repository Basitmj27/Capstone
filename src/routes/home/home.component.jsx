import { Outlet } from "react-router-dom";
import Directory from "../../component/directory/directory.component";

const Home = () => {

  const categories = [
    {
      id: 1,
      tilte: 'Hats',
      imageUrl:	"https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      tilte: 'Jackets',
      imageUrl:	"https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      tilte: 'Sneakers',
      imageUrl:	"https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      tilte: 'Womens',
      imageUrl:	"https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      tilte: 'Mens',
      imageUrl:	"https://i.ibb.co/R70vBrQ/men.png",
    }
  ];
  return(
    <div>
        <Outlet />
        <Directory categories={categories} />;
    </div>
  );
  


}

export default Home;