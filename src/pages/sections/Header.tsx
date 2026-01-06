import { Router } from "next/router"

interface HeaderProps {
    currentPage: String,
    router: Router
}
export const Header = ({currentPage, router}: HeaderProps) => {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="mx-auto px-4">
                <div className="flex items-center justify-center h-16">
                    <nav className="hidden md:flex ityoutems-center gap-6">
                        <button className={`${currentPage === '/' ? "text-blue-600": "text-gray-600"} navButton hover:text-gray-900`} onClick={() => router.push('/')}>
                            Home
                        </button>
                    </nav>
                    <nav className="hidden md:flex items-center gap-6">
                        <button className="navButton">
                            Try Demo
                        </button>
                    </nav>
                    <nav className="hidden md:flex items-center gap-6">
                        <button className={`${currentPage === 'menu' ? "text-blue-600": "text-gray-600"} navButton hover:text-gray-900`} onClick={() => router.push('/Menu')}>
                            Menu
                        </button>
                    </nav>
                    <nav className="hidden md:flex items-center gap-6">
                        <button className={`${currentPage === 'order' ? "text-blue-600": "text-gray-600"} navButton hover:text-gray-900`} onClick={() => router.push('/Order')}>
                            Order
                        </button>
                    </nav>
                </div>  
            </div>

        </header>
    )
}