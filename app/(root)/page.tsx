import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/products.actions';

export const metadata = {
  title: 'Home',
};

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      Home
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </>
  );
};

export default Homepage;
