import { Aside } from "../components/Aside"
import { Navbar } from "../components/Navbar"

export function Services(){
    return (
        <div className='h-screen flex flex-col'>
            <Navbar></Navbar>
            <div className="flex flex-1 overflow-hidden">
                <Aside></Aside>
                <main className="flex-1 overflow-y-auto p-6 mt-20">
                        <h1>Servicios</h1>
                </main>
            </div>

        </div>
    )
}