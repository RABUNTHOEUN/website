import { Key } from 'react';
import ProductItem from './ProductItem';

// @ts-ignore
const MainComponent = ({products}) => (
    <div className="flex justify-center">
        {products.map((product: { name: any; imagePath: any; }, index: Key | null | undefined) => (
            <ProductItem key={index} name={product.name} imagePath={product.imagePath} />
        ))}
    </div>
);

export default MainComponent;
