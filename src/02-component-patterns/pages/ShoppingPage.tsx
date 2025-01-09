import ProductCard from '../components';

import { ProductButtons } from '../components/ProductButtons';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';

import '../styles/custom-styles.css'

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
        <ProductCard 
          product={ product }
          className='bg-dark text-white'
        >
          <ProductCard.Image className='custom-image' img={ product.img } />
          <ProductCard.Title className='text-bold' title={'Hello World'}/>
          
          <ProductCard.Buttons className='custom-buttons'/>
        </ProductCard>

        <ProductCard 
          product={ product }
          className='bg-dark text-white'
        >
          <ProductImage 
            className='custom-image' 
            img={ product.img } 
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          
          <ProductTitle className='text-bold'/>
          <ProductButtons className='custom-buttons'/>
        </ProductCard>

        <ProductCard 
          product={ product }
          className='bg-dark text-white'
          style={{
            backgroundColor: '#70D1F8'
          }}
        >
          <ProductImage img={ product.img } style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}/>
          <ProductTitle style={{ fontWeight: 'bold' }}/>
          <ProductButtons
            className='custom-buttons'
            style={{
              display: 'flex',
              justifyContent: 'end'
            }}
          />
        </ProductCard>
      </div>
    </div>
  )
}
