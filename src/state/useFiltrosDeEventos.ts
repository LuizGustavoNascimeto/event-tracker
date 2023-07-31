import { useRecoilValue } from "recoil";
import { filtroDeEventos } from "./atom";

const useFiltroDeEventos = () => {
  return useRecoilValue(filtroDeEventos);
};
export default useFiltroDeEventos;
