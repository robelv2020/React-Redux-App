import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { appReducer as reducer } from './reducers/appReducer'
import thunk from 'redux-thunk'
import './App.css';

import RecipeForm from './components/RecipeForm'
import RecipeList from './components/RecipeList'

const store = createStore(reducer, applyMiddleware(thunk))


function App() {
  return (
    <div>
      <Provider store={store}>
        <h2>Recipes</h2>
        <RecipeForm />
        <RecipeList />
      </Provider>
    </div>
  );
}

export default App;
