import ItemList from './ItemList'
import '../../assets/bootstrap.min.css'
import '../../styles/ItemListContainer.css'

export default function ItemListContainer() {
    return (
        <>
            <h1 style={{ textAlign: 'center', padding: 25 }}>
                Bienvenidos a P-Fixie-T
            </h1>
            <div className='container justify-content-center align-items-center'>
                <div className='row justify-content-center align-items-center'>
                    <ItemList />
                </div>
            </div>
        </>
    )
}