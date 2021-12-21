
const Card = ({
    product
}) => {
    return (
        <div className="card">
            <img src={product.image} className="card-img-top" alt="product image" />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
            </div>
        </div>
    )
}

