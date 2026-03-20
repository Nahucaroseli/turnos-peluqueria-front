import { useContext, useState } from "react";
import { Aside } from "../components/Aside"
import { Navbar } from "../components/Navbar"
import { TurnoContext } from "../context/turno.context";
import type { Turno, TurnoEdit, TurnoFormValues } from "../types/turno.types";
import { useForm, type SubmitHandler } from "react-hook-form";
import { ServiceContext } from "../context/service.context";
import DatePicker,{registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from 'date-fns/locale/es';

export function Appointments(){

  const {turnos,deleteTurnoContext} = useContext(TurnoContext)!;

  const [openTurnoForm,setOpenTurnoForm] = useState(false);


  const [isEllipsisOpen, setIsEllipsisOpen] = useState(Number);

  const [turnoToEdit,setTurnoToEdit] = useState<Turno|null>(null);



        return (
            <>
                <div className='h-screen flex flex-col' onClick={()=>{setIsEllipsisOpen(888)}}>
                    <Navbar></Navbar>
                    <div className="flex flex-1 overflow-hidden">
                        <Aside></Aside>
                        <main className="flex-1 overflow-y-auto p-6 mt-20">
                                <h1 className="text-2xl">Turnos</h1>
                                <button onClick={()=> {setOpenTurnoForm(!openTurnoForm); setTurnoToEdit(null);}} className="absolute right-3 top-27 cursor-pointer transition hover:scale-105">Asignar Turno</button>
                                <div className="flex flex-col">
                                    {turnos.map((turno)=>{
                                        const fecha = new Date(turno.fecha).toLocaleDateString("es-AR",{
                                            dateStyle:"short"
                                        })
                                        const horario = turno.hora.substring(0,5);
                                        return (
                                                <div key={turno.id} className="bg-white w-auto h-7 mt-9 rounded-xl h-22 flex flex-row md:w-140">

                                                        <div className={`w-1 ${turno.pendiente?"bg-green-300":"bg-yellow-400"}`}></div>
                                              
                                                    <div className="flex flex-row justify-between w-full md:w-140">
                                                        <div className="flex flex-col mt-1">
                                                            <h1 className="text-xl m-2">{turno.service.name}</h1>
                                                            <div className="flex flex-row gap-x-5">
                                                                <h2 className="ml-2">Cliente: {turno.client.name}</h2>
                                                                <h2>Cel: {turno.client.phone}</h2>
                                                            </div>

                                                        </div>
                                                        <div className="flex flex-col justify-center -mr-4">
                                                            <h2>{horario}</h2>
                                                            <h2>{fecha}</h2>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col w-6">
                                                        <i onClick={(e)=> {setIsEllipsisOpen(turno.id); e.stopPropagation();}} className="fa-solid fa-ellipsis relative cursor-pointer"></i>
                                                        <button onClick={()=>{deleteTurnoContext(turno.id)}} className={`${isEllipsisOpen === turno.id?"bg-white border-1 relative w-20 -left-8  -top-16 rounded-t-xl cursor-pointer transition hover:bg-slate-200":"hidden"}`}>Eliminar</button>
                                                        <button onClick={()=>{setTurnoToEdit(turno); setOpenTurnoForm(!openTurnoForm);}} className={`${isEllipsisOpen === turno.id?"bg-white border-1 relative w-20 -left-8 -top-16 rounded-b-xl cursor-pointer transition hover:bg-slate-200":"hidden"}`}>Editar</button>    
                                                    </div>
                                                </div>
                                            )
                                    })}
                                </div>
                        </main>
                    </div>
        
                </div>
                <AppointmentsForm turnoEdit={turnoToEdit} formValue={openTurnoForm} setFormValue={setOpenTurnoForm}></AppointmentsForm>
                </>
            )

  
}


export function AppointmentsForm({turnoEdit,formValue,setFormValue}:{turnoEdit:Turno|null, formValue:boolean,setFormValue:React.Dispatch<React.SetStateAction<boolean>>}){

    registerLocale("es",es);

    const {register,handleSubmit} = useForm<TurnoFormValues>();

    const {services} = useContext(ServiceContext)!;

    const {turnoDisponible,getTurnosDisponiblesContext,addTurnoContext,editTurnoContext} = useContext(TurnoContext)!;

    const [date, setDate] = useState<Date>(new Date());


    const onSubmit:SubmitHandler<TurnoFormValues> = (data) =>{

        if(turnoEdit){
          const turnoEdit:TurnoEdit = {
                "idTurno":data.idTurno,
                "fecha":date,
                "hora":data.hora,
                "service":data.service
          }
          editTurnoContext(turnoEdit);
        }else{

            const turno:TurnoFormValues = {
            "idTurno":undefined,
            "name":data.name,
            "phone":data.phone,
            "fecha":date,
            "hora":data.hora,
            "service":data.service
            }
            addTurnoContext(turno);
        }
        
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} className={`${formValue ? "z-50 flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-85 h-auto bg-white text-center rounded-xl":"hidden"}`}>
            <h1 className="mt-10 text-xl">{turnoEdit?'Editar':'Agregar'}</h1>
            <i onClick={()=> setFormValue(!formValue)} className="fa-solid fa-x relative -top-14 -right-78 cursor-pointer"></i>
            <div className="flex flex-col items-center text-center w-full mt-5 gap-y-5">
                {turnoEdit && <input type="hidden" {...register("idTurno")} defaultValue={turnoEdit.id}/>}
                <label htmlFor="" className={`${turnoEdit?'hidden':'block'}`}>Nombre del Cliente</label>
                <input type="text" className={`${turnoEdit?'hidden':'border-1 border-solid w-50'}`} {...register("name",{required:!turnoEdit})} placeholder="Nombre del Cliente"/>
                <label htmlFor="" className={`${turnoEdit?'hidden':'block'}`}>Telefono</label>
                <input type="text" className={`${turnoEdit?'hidden':'border-1 border-solid w-50'}`} {...register("phone",{required:!turnoEdit})} placeholder="Telefono"/>
                <label htmlFor="">Fecha y Hora</label>
                <div className="flex flex-row gap-x-3">
                    <DatePicker locale={es} className="border-1 text-center" selected={date} onChange={(date:Date|null) => {
                        setDate(date!);
                        getTurnosDisponiblesContext(date!);
                    }} dateFormat="yyyy-MM-dd"/>
                    <select {...register("hora",{required:true})}>
                        <option value="">Seleccionar horario</option>
                        {turnoDisponible?.horarios.map((h)=>{
                            return (
                                    <option  key={h} value={h}>{h.substring(0,5)}</option>
                            )
                        })}
                       
                    </select>
                </div>        
            
                <label htmlFor="">Servicio</label>
                <select className="border-1 border-solid w-50" {...register("service",{required:true})} >
                    <option value="">Seleccionar servicio</option>
                    {services.map((service)=> {
                        return(
                            <option  key={service.id} value={service.id}>{service.name}</option>
                        )
                    })}
  
                </select>
                <button type="submit" className="cursor-pointer hover:underline hover:scale-110 transition pb-4">{turnoEdit?'Editar':'Agregar'}</button>
            </div>
        </form>
    )

}