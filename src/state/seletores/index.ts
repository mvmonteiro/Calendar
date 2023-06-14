import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";


export const eventosFiltradosState = selector({
  key: 'eventosFiltradosState',
  get: ({ get }) => {
    const filtro = get(filtroDeEventos)
    const todoOsEventos = get(listaDeEventosState)
    const eventos = todoOsEventos.filter( (evento) => {
      if(!filtro.data) {
        return true
      }
      const ehOmesmoDia = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
      return ehOmesmoDia
    })
    return eventos
  }
})

export const eventosAsync = selector({
  key: 'eventosAsync',
  get: async () => {
    const respostaHttp = await fetch('http://localhost:8080/eventos')

    const eventosJson: IEvento[] = await respostaHttp.json()
    return eventosJson.map( (evento) => ({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim)
    }))
  }
})