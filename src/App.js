
import './App.css';
import './categories.style.scss';
const App = () => {
    const categories= [
      {
        id: 1,
        title: 'Processors',

      },
      {
        id: 2,
        title: 'GPUs',

      },
      {
        id: 3,
        title: 'Motherboards',

      },
      {
        id: 4,
        title: 'Power Supply Units',

      },
      {
        id: 5,
        title: 'Cabinets',

      },
    ]
  return (
    <div className="categories-container">
      {categories.map(({title, id, imageURL}) => (
      <div className="category-container">
        <div className="background-image"/>
        {/* img */}
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop now</p>
        </div>
      </div>
       )) }
    </div>
  );
}

export default App;
