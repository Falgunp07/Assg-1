import React from 'react';
import RecipeTitle from './RecipeTitle'

function App() {
    return (
        <article>
            <h1>Recipe Manager Chef - Falgun </h1>
            <div>{ Date.now() }</div>
            <div>{new Date().toLocaleTimeString([], { minute: '2-digit', second: '2-digit' })}</div>

            <RecipeTitle />
        </article>
    )
}

export default App;