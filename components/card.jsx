const Card = (props) => {
    return <div className='card shadow-sm rounded h-100'>
        <div className="card-body">
            {props.children}
        </div>
    </div>
}

export default Card;