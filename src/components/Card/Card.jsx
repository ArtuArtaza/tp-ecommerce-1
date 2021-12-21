
const Card = ({
    product,
    className = '',
}) => {
    return (
        <div className="card">
            <img src={product.image} 
            className="card-img-top mt-3" style={{width:'5rem',alignSelf:'center'}} alt="product image" />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p class="card-text">{product.description}</p>
                <div className="d-flex justify-content-between">
                    <span className="text-success fw-bold">{`$${product.price}`}</span>
                    <button className="btn btn-success">Buy!</button>
                </div>
            </div>
        </div>
    )
}

export default Card