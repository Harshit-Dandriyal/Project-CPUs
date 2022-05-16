
import './categories.style.scss';
import { Route,Routes} from "react-router-dom";
import HomePage from './components/routes/homePage/home.component';
import Navigator from './components/routes/Navigator/navigator.component';
import SignIn from './components/routes/signInPage/sign-in.component';
const ShopPage = ()  => {
    return(
      <h1>I am Gamers Shop</h1>
    )

}
const App = () => {

  return (<Routes>
          <Route path='/' element={<Navigator/>}>
              <Route index element={<HomePage/>} />
              <Route path='shop' element={<ShopPage/>} />
              <Route path='sign-in' element={<SignIn/>} />
            </Route>
          </Routes>
  );
}

export default App;
