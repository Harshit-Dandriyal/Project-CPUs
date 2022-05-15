import './mapcategory.styles.scss';
import CategoryItem from '../category-item/category-item';
const MapCategory = ({categories}) => {


return(
    <div className="categories-container">
      {categories.map(({title, id, imageUrl}) => (
      <CategoryItem title={title} id={id} imageUrl={imageUrl}/>
       )) }
    </div>


)


}
export default MapCategory