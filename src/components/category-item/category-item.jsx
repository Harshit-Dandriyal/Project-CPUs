import './category-item.styles.scss';
const CategoryItem = ({title, id, imageUrl }) => {


return(
    <div key={id} className="category-container">
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`


        }}/>
        {/* img */}
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop now</p>
        </div>
      </div>


)


}
export default CategoryItem