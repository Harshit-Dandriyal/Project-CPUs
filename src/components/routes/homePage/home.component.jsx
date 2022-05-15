
import MapCategory from "../../mappingcateory/mapcategory";
const HomePage = () => {
    const categories= [
      {
        id: 1,
        title: 'Processors',
        imageUrl: 'https://oyster.ignimgs.com/wordpress/stg.ign.com/2019/04/4x3_1600x1200_highres-amd_ryzen_3000_zen_2-720x405.jpg?fit=bounds&width=1280&height=720'

      },
      {
        id: 2,
        title: 'GPUs',
        imageUrl: 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/12/best-gpu-for-4k-gaming.jpg'

      },
      {
        id: 3,
        title: 'Motherboards',
        imageUrl: 'https://www.newegg.com/insider/wp-content/uploads/2018/04/gigabyte-aorus-x399-gaming-motherboard-amd-ryzen-threadripper-cpu-2-1.jpg'

      },
      {
        id: 4,
        title: 'Power Supply Units',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/43ujPgypw9WKgut4dSAGjk.jpg'

      },
      {
        id: 5,
        title: 'Cabinets',
        imageUrl: 'https://images.unsplash.com/photo-1587202372583-49330a15584d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXIlMjBjYXNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'

      },
    ]
  return (
   
    <div>
        <MapCategory categories={categories}/>
    </div>
    
  );
}

export default HomePage;
