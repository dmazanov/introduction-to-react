import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import {categories} from "./fixtures";

function App() {
    console.log("categories", categories);
    return <Fragment>
        <Category category={categories[0]} name="test" title="test2" />
    </Fragment>
}

function Category(props) {
    const { category } = props;
    console.log("category", category);
    return <div>
        {category.name ? (
            <h1>{category.name}</h1>
        ) : null}
        {category.description ? (
            <p>{category.description}</p>
        ) : null}
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'));