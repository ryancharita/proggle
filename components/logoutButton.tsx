'use client';
import { useClerk } from '@clerk/nextjs';
import { Button } from './ui/button';

export default function LogoutButton() {
  const { signOut } = useClerk();
  return <Button onClick={() => signOut()}>Logout</Button>;
}
