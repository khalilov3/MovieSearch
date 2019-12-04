import React , {Component} from 'react'
import TextField from 'material-ui/TextField';
import axios from 'axios' ; 
import MovieResult from '../movie-results/MovieResult'

class Search extends Component{

    //setting the state of our searcharea
    state={
        searchText: '',
        //the api provided for the test
        apiUrl : 'https://api.tvmaze.com/search/shows?q=test',
        //array in which we will fetch our data
        movies : []
    }
    // preparing the Movies table 
    onTextChange = (e) => {
        this.setState({[e.target.name]:e.target.value}, () => 
        {
            //getting the Api url and getting the data as a result(response)
            axios.get(`${this.state.apiUrl}& q=${this.state.searchText} & safesearch=true`)
            
            .then(res => 
                this.setState({movies:res.data}))
            .catch(err => console.log(err))

        });
    };


    render(){
        console.log(this.state.movies);
        return(
            //preparing our searchArea shape
            <div>
                <TextField
                    name="searchText"
                    value= {this.state.searchText}
                    onChange= {this.onTextChange}
                    floatingLabelText = "Search for Movies"
                    fullWidth ={true}
                />
                <br/>
                {this.state.movies.length > 0 ? (<MovieResult movies = {this.state.movies}/>) : null }  
            </div>
        )
    }
}

export default Search;