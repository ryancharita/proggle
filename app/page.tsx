import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default () => {
  const { userId } = auth();

  if (userId) {
    return redirect('/play');
  }

  return redirect('/about');
};
