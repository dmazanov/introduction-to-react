import React, {Fragment, useState} from "react"
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
    const [isOpen, toggleOpen] = useState(false);
    const handleClick = () =>
    {
        toggleOpen(!isOpen);
    }
    console.log("isOpen ", isOpen)
    return <div>
        {category.name ? (
            <h1>{category.name}</h1>
        ) : null}
        {isOpen && category.description ? (
            <p>{category.description}</p>
        ) : null}
        <button type="button" onClick={handleClick}>toggle description</button>
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'));