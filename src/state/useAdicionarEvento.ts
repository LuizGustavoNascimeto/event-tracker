import { useSetRecoilState } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { obterId } from "../util";
import { listaDeEventosState } from "./atom";

const useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  return (evento: IEvento) => {
    const hoje = new Date();
    if (evento.inicio < hoje) {
      throw new Error(
        "Mané, não pode por data que é de antes de amanhã, ta maluco porra?"
      );
    }
    evento.id = obterId();
    return setListaDeEventos((listaAntiga) => [...listaAntiga, evento]);
  };
};
export default useAdicionarEvento;
