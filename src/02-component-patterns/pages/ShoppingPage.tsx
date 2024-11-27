import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png',
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        <ProductCard product={ product }>
          <ProductCard.Image img={ product.img } />
          <ProductCard.Title title={'Hello World'}/>
          
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={ product }>
          <ProductImage img={ product.img } />
          <ProductTitle />

          <ProductButtons />
        </ProductCard>

      </div>
    </div>
  )
}
