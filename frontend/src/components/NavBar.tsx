import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b bg-white backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-300">

                <Link to="/" className="text-xl font-extrabold tracking-tight">
                    <div className="flex items-center">
                        <ImageLogo src="/logo.jpg" alt="logo do sistema" />
                        <h2 className="text-primary">EducaAssist</h2>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-4">
                    <Button variant="accent">Começar agora</Button>
                </nav>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            aria-label="Abrir menu"
                        >
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-75 sm:w-87.5">
                        <nav className="flex flex-col gap-4 mt-8">
                            <Button variant="ghost" className="justify-start">
                                Entrar
                            </Button>
                            <Button className="justify-start">
                                Começar agora
                            </Button>
                        </nav>
                    </SheetContent>
                </Sheet>

            </div>
        </header>
    )
}


const ImageLogo = styled.img`
    width: 60px;
    height: auto;

`