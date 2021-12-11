import { Routes,Route } from "react-router";
import MainHomePage from "../Page/MainHomepage";
import TvShow from "../Page/Tvshow";
import MyList from "../Page/MyList";
import Movies from "../Page/Movies";
import SearchEngine from "../Page/Search";
import SearchPage from "../Page/SearchPage";



function Routing(){
    return(
        <div>
        <Routes>
        <Route path="/" element={<MainHomePage />}></Route>
        <Route path="/tvshow" element={<TvShow />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/mylist" element={<MyList />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
        </div>
    )
}

export default Routing;