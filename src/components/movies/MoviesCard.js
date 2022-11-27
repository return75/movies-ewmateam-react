export default (props) => {
    return <div className={'movie-card'}>
        <div
            className={'image-cover'}
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.image})`,
            }}
        >
        </div>
        <h5>{props.title}</h5>
        <div>{props.date}</div>
    </div>
}