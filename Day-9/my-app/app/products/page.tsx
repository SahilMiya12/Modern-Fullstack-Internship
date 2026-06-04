import LogoutButton from '@/app/components/LogoutButton';
import ProductsList from '../components/ProductsList';
export default function Products(){
    return (
        <>
        <h1>Welcome to Products</h1>
        <ProductsList/>
        <LogoutButton/>
        </>
    )
}