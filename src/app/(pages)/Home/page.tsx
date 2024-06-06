// Home.js
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
    const products = [
        { name: 'iPhone 15 Pro', image: '/images/1.avif', slug: 'iphone-15-pro', buyiphone15pro: 'buy',lernmoreiphone15pro:'leanmore' },
        { name: 'iPhone 14 Pro', image: '/images/img.png', slug: 'iphone-14-pro', buyiphone14pro: 'buy',lernmoreiphone14pro:'leanmore' },
        { name: 'iPhone 13 Pro', image: '/images/1.avif', slug: 'iphone-13-pro', buyiphone13pro: 'buy' ,lernmoreiphone13pro:'leanmore'},
        { name: 'iPhone 12 Pro', image: '/images/img_1.png', slug: 'iphone-12-pro', buyiphone12pro: 'buy',lernmoreiphone12pro:'leanmore' },
        // Add more products
    ];

    return (
        <main>

            <div className="thoeun">
                <div content="max">

                </div>
                {products.map((product, index) => (
                    <div key={index} className="product">
                        <Link href={`/${product.slug}`} as={`/${product.slug}`}>
                            <div>
                                <h1>{product.name}</h1>
                                <p>Titanium. So strong. So light. So Pro</p>
                            </div>
                        </Link>
                        <div className="learn">
                            <Link className="mr-2 hover:text-amber-100" href="/iphones/lernmoreiphone15pro">
                                {product.lernmoreiphone15pro}
                            </Link>
                            <Link className="ml-2 hover:text-amber-100" href="/components/buy">
                                {product.buyiphone15pro}
                            </Link>
                            <Link className="mr-2 hover:text-amber-100" href="/iphones/lernmoreiphone14pro">
                                {product.lernmoreiphone14pro}
                            </Link>
                            <Link className="ml-2 hover:text-amber-100" href="/components/buy">
                                {product.buyiphone14pro}
                            </Link>
                            <Link className="mr-2 hover:text-amber-100" href="/iphones/lernmoreiphone13pro">
                                {product.lernmoreiphone13pro}
                            </Link>
                            <Link className="ml-2 hover:text-amber-100" href="/components/buy">
                                {product.buyiphone13pro}
                            </Link>
                            <Link className="mr-2 hover:text-amber-100" href="/iphones/lernmoreiphone12pro">
                                {product.lernmoreiphone12pro}
                            </Link>
                            <Link className="ml-2 hover:text-amber-100" href="/components/buy">
                                {product.buyiphone12pro}
                            </Link>
                        </div>

                        {/* Add more actions as needed */}
                        <div className="product-image">
                            <Image
                                src={product.image}
                                alt={`Description of ${product.name}`}
                                width={800}
                                height={400}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
