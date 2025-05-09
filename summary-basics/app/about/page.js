import Link from 'next/link';

export default function About() {
  return (
    <main>
      <h1>About this Course</h1>
      <p>🔥 This is a NextJS course! 🔥</p>
      <p>🔥 We are learning about the app directory! 🔥</p>
      <p>🔥 Let&apos;s get started! 🔥</p> 
      <p><Link href="/">Home</Link></p>
    </main>
  );
}
