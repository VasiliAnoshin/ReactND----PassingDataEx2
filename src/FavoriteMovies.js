import React , { Component } from 'react'

function  showLikeNotification(users, favMovID){
  		if(users.filter(user  =>   user.favoriteMovieID == favMovID).length > 0){
          return  'Liked By: ' 
        }else{
          return 'None of the current users liked this movie'
        }
}

class FavoriteMovies extends Component {
		render(){
        		return(
                    <ol className = 'movies-list'>{
                        Object.values(this.props.movies).map(movie =>
                                     <li key ={movie.id}>
										<h2> {movie.name} </h2> 
                                              <ul>
                                                    <p >{showLikeNotification(this.props.profiles, movie.id)}</p>
                                                      {	this.props.profiles.filter(prof => (prof.favoriteMovieID == movie.id)).map(user => 
                                                              <li key = {user.id}> 
                                                              				{this.props.users[user.id].name}
                                                              </li> 
                                                      )}
 											  </ul>
                          				 </li>
   						)}
                         </ol> )}
}

export default FavoriteMovies;