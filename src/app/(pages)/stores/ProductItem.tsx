import Image from 'next/image';

// @ts-ignore
const ProductItem = ({ name, imagePath }) => (
    <div className="flex flex-col justify-center items-center">
        <Image
            className="rounded-circle m-2"
            src={imagePath}
            alt={`Image of ${name}`}
            width={100}
            height={100}
        />
        <a className="ml-2">{name}</a>
    </div>
);

export default ProductItem;
