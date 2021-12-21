import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card'
const CardList = () => {
    const url = 'https://fakestoreapi.com/products'
    const [data,loading] = useFetch(url)

    return (
        <>
            <ul>
            {
                data.map((product) => (
                    <Card product={product}/>
                ))
            }
            </ul>
        </>
    )
}