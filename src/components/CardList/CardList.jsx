import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card'
const CardList = ({
    data
}) => {
    return (
        <>
            <ul className="container" style={{listStyle:'none',padding:'0'}}>
            { data.map((product,i) => (
                    <li className='row'>
                        <Card product={product}/>
                    </li>
                ))   
            }
            </ul>
        </>
    )
}

export default CardList