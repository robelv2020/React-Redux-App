import React from 'react'
import { connect } from 'react-redux'
import { Card, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const RecipeList = props => {
  return (
    <div>
      {props.recipes.map(recipe => (
        <div>{recipe.title}</div>
      ))}
    </div>
  )
}

const mdtp = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mdtp, {})(RecipeList)

