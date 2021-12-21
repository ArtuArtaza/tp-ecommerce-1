
const Card = ({
    product
}) => {
    return (
        <div className="card w-25">
            <img src={product.image} className="card-img-top" style={{width:'5rem'}} alt="product image" />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p class="card-text">{product.description}</p>
                <span className="text-success">{product.price}</span>
            </div>
        </div>
    )
}

export default Card