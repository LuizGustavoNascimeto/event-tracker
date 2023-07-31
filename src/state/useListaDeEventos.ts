import { useRecoilValue } from "recoil";
import { eventosFiltradosState } from "./seletores";

const useListaDeEvento = () => {
  return useRecoilValue(eventosFiltradosState);
};
export default useListaDeEvento;
