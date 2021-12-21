import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card'
const CardList = ({
    data
}) => {
    return (
        <>
            <div className="container">
            { data.map((product,i) => (
                    <div className="row border-primary border-5">
                        <Card className="col-5" product={product}/>
                    </div>

                ))   
            }
            </div>
        </>
    )
}

export default CardList