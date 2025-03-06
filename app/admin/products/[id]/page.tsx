import notFound from '@/app/not-found';
import ProductForm from '@/components/admin/product-form';
import { getProductById } from '@/lib/actions/products.actions';

export const metadata = {
  title: 'Update Product',
};

const AdminProductUpdatePage = async (props: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await props.params;
  const product = await getProductById(id);
  if (!product) {
    return notFound();
  }

  return (
    <div className="max-w-5l mx-auto space-y-8">
      <h1 className="font-bold">Update Product</h1>
      <ProductForm type="Update" product={product} productId={product.id} />
    </div>
  );
};

export default AdminProductUpdatePage;
