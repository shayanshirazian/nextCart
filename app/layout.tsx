import './globals.css'

export const metadata = {
    title: "Cola's Kitchens Cart",
    description: 'simulated cart with next.js'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}