import{Route, Routes} from 'react-router-dom'
import NavBar from '../pages/components/NavBar'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Characters from '../pages/Characters'
import Favorites from '../pages/Favorites'
import Movies from '../pages/Movies'
import Planets from '../pages/Planets'
import Starships from '../pages/Starships'
import MainPage from '../pages/MainPage'


const AppRouter = () => {
  return (
    <>  
    
    <Routes>
                <Route path='/' element = {<NavBar/>} >
                    <Route index element = {<MainPage/>}/>
                    <Route path='/login' element = {<Login/>} />
                    <Route path='/register' element = {<Register/>}/>
                    <Route path='/characters' element = {<Characters/>}/>
                    <Route path='/favorites' element = {<Favorites/>}/>
                    <Route path='/movies' element = {<Movies/>}/>
                    <Route path='/planets' element = {<Planets/>}/>
                    <Route path='/starships' element = {<Starships/>}/>
                </Route>
                
            
        </Routes>
        
    </>
    
        
  )
}

export default AppRouter