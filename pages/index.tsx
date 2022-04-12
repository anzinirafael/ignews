import Head from 'next/head';
import { Header } from '../src/Components/Header';
export default function Home() {
  return (
    <> 
      <Head><title>Inicio | Ig.News</title></Head>
      <Header />
    </>
  );
}