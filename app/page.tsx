import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const Guard = () => {
  const { userId } = auth();

  if (userId) {
    return redirect('/play');
  }

  return redirect('/about');
};

export default Guard;
