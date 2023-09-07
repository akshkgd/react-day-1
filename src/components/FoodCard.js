function FoodCard(props){
    function orderHandler(){
        console.log("Order successful for", props.title)
        if(props.price<100){
            console.log('Delivery charges applicable of rs 29!')
        }
        else{
            console.log('Eligible for free delivery!')
        }
    }   
    return(
        <div className="card" onClick={orderHandler}>
            <div className="card-header">
                <img className="card-img" src={"https://source.unsplash.com/1600x1000/?"+props.img} />
                <div className={props.ratings>4.4 ? "best" : "d-none"}>Best Seller</div>
            </div>
            <div className="card-body">
                <h3>{props.title}</h3>
                <h4 className="price">₹{props.price} <span className="fw-light">for one</span></h4>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}
export default FoodCard;