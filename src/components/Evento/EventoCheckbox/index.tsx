import React from "react";
import { IEvento } from "../../../interfaces/IEvento";
import useAtualizarEvento from "../../../state/useAtualizarEvento";

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
  const atualizarEvento = useAtualizarEvento();

  const estilos = [
    "far",
    "fa-2x",
    evento.completo ? "fa-check-square" : "fa-square",
  ];
  const alterarStatusEvento = () => {
    const eventoAlterado = {
      ...evento,
    };
    eventoAlterado.completo = !evento.completo;

    atualizarEvento(eventoAlterado);
  };
  return <i className={estilos.join(" ")} onClick={alterarStatusEvento}></i>;
};

export default EventoCheckbox;
