import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <section
            className="
        relative min-h-screen w-screen overflow-hidden
        left-1/2 right-1/2
        -ml-[50vw] -mr-[50vw]
    "
        >
            <div
                className="absolute inset-0 bg-cover "
                style={{ backgroundImage: "url('/background.png')" }}
            />

            <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent" />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-300 items-center px-6 md:px-16">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-extrabold text-white">
                        MENOS BUROCRACIA,
                    </h1>
                    <h1 className="text-4xl font-extrabold text-white pb-4">
                        MAIS TEMPO PARA ENSINAR
                    </h1>

                    <h2 className="text-lg font-medium text-white pb-8">
                        Um assistente pedagógico com IA que ajuda professores a planejar aulas,
                        avaliar atividades e gerar feedbacks personalizados em minutos.
                    </h2>

                    <div className="flex gap-4 ">
                        <Button size="lg" variant="accent">
                            Começar a utilizar
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                        >
                            Como funciona?
                        </Button>
                    </div>

                    <p className="text-white pt-20 font-medium text-1xl ">A IA atua como assistente pedagógico, não substitui o professor.*</p>
                </div>
            </div>
        </section>
    )
}
