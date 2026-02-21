import { Aside } from "../components/Aside"
import { Navbar } from "../components/Navbar"

export function Home(){
    return (
        <div className='h-screen flex flex-col'>
            <Navbar></Navbar>
            <div className="flex flex-1 overflow-hidden">
                <Aside></Aside>
                <main className="flex-1 overflow-y-auto p-6 mt-20">
                        <h1 className="text-2xl">Inicio</h1>
                        <div className="h-40 bg-sky-600 md:w-200 rounded-xl">
                        </div>
                </main>
            </div>
        </div>
    )
}