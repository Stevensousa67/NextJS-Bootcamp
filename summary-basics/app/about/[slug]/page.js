import Link from 'next/link';

export default function BlogPost(){
    return (
        <main>
            <h1>Blog Post</h1>
            <p>🔥 This is a blog post! 🔥</p>
            <p>🔥 We are learning about the app directory! 🔥</p>
            <p>🔥 Let&apos;s get started! 🔥</p> 
            <p><Link href="/">Home</Link></p>
            <p><Link href="/about">About Us</Link></p>
        </main>
    )
}