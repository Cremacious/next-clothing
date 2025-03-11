import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts, getFeaturedProducts } from '@/lib/actions/products.actions';
import ProductCarousel from '@/components/shared/product/product-carousel';


export const metadata = {
  title: 'Home',
};

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();

  return (
    <>
      {featuredProducts.length > 0 && <ProductCarousel data={featuredProducts} />}
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </>
  );
};

export default Homepage;
