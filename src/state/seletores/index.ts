import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { filtroDeEventos, listaDeEventosState } from "../atom";

export const eventosFiltradosState = selector({
  key: "eventosFiltradosState",
  get: ({ get }) => {
    const filtro = get(filtroDeEventos);
    const todosOsEventos = get(listaDeEventosState);
    const eventos = todosOsEventos.filter((evento) => {
      const ehOMesmoStatus =
        filtro.status === "Completos"
          ? evento.completo
          : filtro.status === "Incompletos"
          ? !evento.completo
          : true;

      const ehOMesmoDia =
        !filtro.data ||
        evento.inicio.toISOString().slice(0, 10) ===
          filtro.data.toISOString().slice(0, 10);

      return ehOMesmoStatus && ehOMesmoDia;
    });
    return eventos;
  },
});

export const eventosAsync = selector({
  key: "eventosAsync",
  get: async () => {
    const respostaHttp = await fetch("http://localhost:8000/eventos");
    const eventosJson: IEvento[] = await respostaHttp.json();
    return eventosJson.map((evento) => ({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim),
    }));
  },
});
