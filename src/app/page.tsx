import Image from 'next/image'
import Link from 'next/link';
import CardHeader from './CardHeader/CardHeader';
import ContentCard from './ContentCard/ContentCard';
import Faq from './FAQ/faq';
import Footer from './Footer/footer';
import { useState } from 'react';
export default function Home() {  
  return (<><CardHeader /><ContentCard/><Faq /><Footer/></>)
}
