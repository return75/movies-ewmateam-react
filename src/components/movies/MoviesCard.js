export default (props) => {
    return <div>
        <img src={props.image} alt="image"/>
        <h5>{props.title}</h5>
        <div>{props.date}</div>
    </div>
}