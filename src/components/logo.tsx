import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <Image src="/Logo_amk.png" alt="AMK Safety & Security Logo" width={220} height={73} className="rounded-md object-contain" />
    </Link>
  );
}
