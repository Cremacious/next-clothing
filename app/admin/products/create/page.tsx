import ProductForm from '@/components/admin/product-form';

export const metadata = {
  title: 'Create Product',
};

const CreateProductsPage = () => {
  return (
    <>
      <h2 className="font-bold">Create Product</h2>
      <div className="my-8">
        <ProductForm type='Create' />
      </div>
    </>
  );
};

export default CreateProductsPage;
