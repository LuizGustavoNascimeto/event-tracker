import { useSetRecoilState } from "recoil";
import { IFiltroDeEventos } from "../interfaces/IFiltro";
import { filtroDeEventos } from "./atom";

const useAdicionarFiltro = () => {
  const setFiltro = useSetRecoilState<IFiltroDeEventos>(filtroDeEventos);
  return (filtro: IFiltroDeEventos) => {
    return setFiltro(filtro);
  };
};
export default useAdicionarFiltro;
