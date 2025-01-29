import Link from 'next/link';
import { ticketsPath } from '@/paths';

const HomePage = () => {
  return (
    <><h2 className="text-lg">Home Page</h2><Link href={ticketsPath()} className="underline">Go to tickets</Link></>
  );
};

export default HomePage;
