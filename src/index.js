import React, {Fragment, useState} from "react"
import ReactDOM from "react-dom"
import {categories} from "./fixtures";

function App() {
    console.log("categories", categories);
    return <Fragment>
        <CategoriesList categories = {categories} />
    </Fragment>
}

function CategoriesList(props){
    const {categories} = props;
    return (
        <ul>
            {categories.map((item) => {
                return (
                    <li key={item.id}><Category category={item} /></li>
                )
            })}
        </ul>
    )
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
        {category.description ? (
            <>
                {isOpen ? (
                    <p dangerouslySetInnerHTML= {{__html: category.description}} />
                ) : null}
                <button type="button" onClick={handleClick}>toggle description</button>
            </>
        ) : null}
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'));