import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Apex Wholesale - B2B Wholesale Inventory for Ecommerce Sellers',
    description:
          'Access thousands of wholesale products daily. Zero marketplace fees. Direct supplier pricing. Perfect for Shopify, Amazon, and Etsy sellers.',
    keywords: 'wholesale, B2B, ecommerce, inventory, dropship, Shopify, Amazon, Etsy',
    authors: [{ name: 'Apex Wholesale' }],
    openGraph: {
          type: 'website',
          locale: 'en_US',
          url: 'https://apex-wholesale.vercel.app',
          title: 'Apex Wholesale',
          description: 'Wholesale inventory sourcing for ecommerce sellers',
          siteName: 'Apex Wholesale',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
          <html lang="en">
                <head>
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                </head>head>
                <body className="bg-white">{children}</body>body>
          </html>html>
        );
}</html>
