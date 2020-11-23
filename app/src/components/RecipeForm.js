import React from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions/index'

const RecipeForm = props => {

  const handleGetData = () => {
    props.getData()
  }

  return (
    !props.isGettingData ? (
      <button onClick={handleGetData}>Get Recipes</button>
    ) : (
        <div>Getting the data</div>
      )

  )
}

const mdtP = state => {
  console.log(state)
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(
  mdtP,
  { getData }
)(RecipeForm);