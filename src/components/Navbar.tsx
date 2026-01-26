import Image from 'next/image'
import Link from 'next/link'
import Km2 from '@/public/images/km2.png'
import Navigation from './Navigation'

type NavbarProps = {
  locale: string
}

const Navbar = ({ locale }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur isolate">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-3 no-underline"
          aria-label="Go to home"
        >
          <Image
            src={Km2}
            alt="devkeven logo"
            className="h-auto w-28 rounded-md"
            priority
          />
        </Link>

        <Navigation />
      </div>
    </header>
  )
}

export default Navbar
