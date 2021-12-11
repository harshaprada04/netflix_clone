import HomePage from "./Homepage";
import requests from "../request";
import "./movies.css";

function Movies(){
    
    return(
        <div className="movie">
        <HomePage title="Hindi Movies" fetechURL={requests.hindi_movies} />
        <HomePage title="Kannada Movies" fetechURL={requests.kannada_movies} />
        <HomePage title="Telugu Movies" fetechURL={requests.telugu_movies} />
        <HomePage title="Tamil Movies" fetechURL={requests.tamil_movies} />
        <HomePage title="Romantic Movies" fetechURL={requests.romance_movies} />
        <HomePage title="Malayalam Movies" fetechURL={requests.malayalam_movies} />
        <HomePage title="Science Fiction Movies" fetechURL={requests.science_fiction_movies} />
        </div>
    )
}
export default Movies;