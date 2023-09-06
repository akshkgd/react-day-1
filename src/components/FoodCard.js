function FoodCard(props){
    return(
        <div className="card">
            <div className="card-header">
                <img className="card-img" src={"https://source.unsplash.com/1600x1000/?"+props.img} />
                <div className={props.ratings>4.4 ? "best" : "d-none"}>Best Seller</div>
            </div>
            <div className="card-body">
                <h3>{props.title}</h3>
                <p>Combination of special spices,onion, capsicum and tomato.</p>
            </div>
        </div>
    )
}
export default FoodCard;