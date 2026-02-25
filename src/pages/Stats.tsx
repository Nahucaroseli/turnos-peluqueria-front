import { Aside } from "../components/Aside"
import { Navbar } from "../components/Navbar"

export function Stats(){
    return (
        <div className='h-screen flex flex-col'>
            <Navbar></Navbar>
            <div className="flex flex-1 overflow-hidden">
                <Aside></Aside>
                <main className="flex-1 overflow-y-auto p-6 mt-20">
                        <h1 className="text-2xl">Estadisticas</h1>
                </main>
            </div>

        </div>
    )
}