import Link from 'next/link';
import Header from '@/app/components/header';

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About Us</Link></p>
      <p><Link href="/about/post-1">Blog Post 1</Link></p>
      <p><Link href="/about/post-2">Blog Post 2</Link></p>
    </main>
  );
}
