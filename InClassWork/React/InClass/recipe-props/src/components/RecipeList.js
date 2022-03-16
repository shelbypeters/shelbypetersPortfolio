import Recipe from "./Recipe";
import PropTypes from 'prop-types'

const RecipeList = (props) => {
    return (
        <div className="recipe-list">
            {props.recipes.map((r, index) => (
                <Recipe key={index} {...r} />
            ))}
        </div>
    )
}

RecipeList.defaultProps = {
    recipes: [
     {
       title: "Spaghetti",
       instructions: "Open jar of Spaghetti sauce...",
       ingredients: ["pasta", "8 oz water", "1 box spaghetti"],
       img: "https://i.imgur.com/2q2OgnC.jpg"
     },
     {
       title: "Lobster Macaroni and cheese",
       instructions: "Combine lobster and macaroni.  Blend until creamy",
       ingredients: ["1 large lobster", "8 oz of macaroni"],
       img: "https://i.imgur.com/cUvCIrl.jpg"
     },
     {
       title: "Bacon Wrapped Filet Mignon",
       instructions: "Wrap filet mignon in bacon.  Add salt, oil, and pepper to taste.",
       ingredients: ["1 slice of bacon", "1 tbs olive oil", "1 pinch salt", "pepper"],
       img: "https://i.imgur.com/zdkqhsb.jpg"
     }
   ]
 }

 Recipe.propTypes = {
     title: PropTypes.string.isRequired,
     img: PropTypes.string.isRequired,
     instructions: PropTypes.string.isRequired,
     ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
 }

export default RecipeList;