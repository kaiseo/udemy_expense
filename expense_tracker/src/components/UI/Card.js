import "./Card.css";

const Card = (props) =>{
//props.children is to make Card component a wrapper
//tweak the classname any value set is added to 'card '

    const classes='card '+props.className;
    return <div className={classes}>
        
        {props.children}
    </div>
}

export default Card;