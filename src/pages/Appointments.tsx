import { useContext, useState } from "react";
import { Aside } from "../components/Aside"
import { Navbar } from "../components/Navbar"
import { TurnoContext } from "../context/turno.context";
import type { Turno, TurnoFormValues } from "../types/turno.types";
import { useForm, type SubmitHandler } from "react-hook-form";
import { ServiceContext } from "../context/service.context";
import DatePicker,{registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from 'date-fns/locale/es';

export function Appointments(){

  const {turnos} = useContext(TurnoContext)!;

  const [openTurnoForm,setOpenTurnoForm] = useState(false);



        return (
            <>
                <div className='h-screen flex flex-col'>
                    <Navbar></Navbar>
                    <div className="flex flex-1 overflow-hidden">
                        <Aside></Aside>
                        <main className="flex-1 overflow-y-auto p-6 mt-20">
                                <h1 className="text-2xl">Turnos</h1>
                                <button onClick={()=> setOpenTurnoForm(!openTurnoForm)} className="absolute right-3 top-27 cursor-pointer transition hover:scale-105">Asignar Turno</button>
                                <div className="flex flex-col">
                                    {turnos.map((turno)=>{
                                        const fecha = new Date(turno.fecha).toLocaleDateString("es-AR",{
                                            dateStyle:"short"
                                        })
                                        const horario = turno.hora.substring(0,5);
                                        return (
                                                <div key={turno.id} className="bg-white w-auto h-7 mt-9 rounded-xl h-18 flex flex-row md:w-140 overflow-hidden">
                                                    <div className={`w-1 ${turno.pendiente?"bg-green-300":"bg-yellow-400"}`}></div>
                                                    <div className="flex flex-row justify-between w-full md:w-140">
                                                        <div className="flex flex-col">
                                                            <h1 className="text-xl m-2">{turno.service.name}</h1>
                                                            <div className="flex flex-row gap-x-5">
                                                                <h2 className="ml-2">Cliente: {turno.client.name}</h2>
                                                                <h2>Cel: {turno.client.phone}</h2>
                                                            </div>

                                                        </div>
                                                        <div className="flex flex-col justify-center mr-1">
                                                            <h2>{horario}</h2>
                                                            <h2>{fecha}</h2>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                    })}
                                </div>
                        </main>
                    </div>
        
                </div>
                <AppointmentsForm turnoEdit={null} formValue={openTurnoForm} setFormValue={setOpenTurnoForm}></AppointmentsForm>
                </>
            )

  
}


export function AppointmentsForm({turnoEdit,formValue,setFormValue}:{turnoEdit:Turno|null, formValue:boolean,setFormValue:React.Dispatch<React.SetStateAction<boolean>>}){

    registerLocale("es",es);

    const {register,handleSubmit} = useForm<TurnoFormValues>();

    const {services} = useContext(ServiceContext)!;

    const {turnoDisponible,getTurnosDisponiblesContext,addTurnoContext} = useContext(TurnoContext)!;

    const [date, setDate] = useState<Date>(new Date());


    const onSubmit:SubmitHandler<TurnoFormValues> = (data) =>{
        const turno:TurnoFormValues = {
            name:data.name,
            phone:data.phone,
            fecha:date,
            hora:data.hora,
            service:data.service
        }
        addTurnoContext(turno);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} className={`${formValue ? "flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-130 bg-white text-center rounded-xl":"hidden"}`}>
            <h1 className="mt-10 text-xl">{turnoEdit?'Editar':'Agregar'}</h1>
            <i onClick={()=> setFormValue(!formValue)} className="fa-solid fa-x relative -top-14 -right-93 cursor-pointer"></i>
            <div className="flex flex-col items-center text-center w-full mt-10 gap-y-5">
                <label htmlFor="">Nombre del Cliente</label>
                <input type="text" className="border-1 border-solid w-50" {...register("name",{required:true})} placeholder="Nombre del Cliente"/>
                <label htmlFor="">Telefono</label>
                <input type="text" className="border-1 border-solid w-50" {...register("phone",{required:true})} placeholder="Telefono"/>
                <label htmlFor="">Fecha y Hora</label>
                <div className="flex flex-row gap-x-3">
                    <DatePicker locale={es} className="border-1 text-center" selected={date} onChange={(date:Date|null) => {
                        setDate(date!);
                        getTurnosDisponiblesContext(date!);
                    }} dateFormat="yyyy-MM-dd"/>
                    <select>
                        {turnoDisponible?.horarios.map((h)=>{
                            return (
                                    <option {...register("hora",{required:true})} key={h} value={h}>{h.substring(0,5)}</option>
                            )
                        })}
                       
                    </select>
                </div>        
            
                <label htmlFor="">Servicio</label>
                <select className="border-1 border-solid w-50" >
                    {services.map((service)=> {
                        return(
                            <option {...register("service",{required:true})} key={service.id} value={service.id}>{service.name}</option>
                        )
                    })}
  
                </select>
                <button type="submit" className="cursor-pointer hover:underline hover:scale-110 transition">{turnoEdit?'Editar':'Agregar'}</button>
            </div>
        </form>
    )

}