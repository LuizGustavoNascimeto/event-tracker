import React, { useState } from "react";
import { IFiltroDeEventos } from "../../interfaces/IFiltro";
import useAdicionarFiltro from "../../state/useAdicionarFiltro";
import style from "./Filtro.module.scss";
import { IFiltroStatus } from "../../interfaces/IFiltro";

const Filtro: React.FC = () => {
  const [data, setData] = useState("");
  const [status, setStatus] = useState<IFiltroStatus>("Ambos");

  const adicionarFiltro = useAdicionarFiltro();

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const filtro: IFiltroDeEventos = {
      status,
    };
    data ? (filtro.data = new Date(data)) : (filtro.data = null);
    adicionarFiltro(filtro);
  };

  return (
    <form className={style.Filtro} onSubmit={submeterForm}>
      <h3 className={style.titulo}>Filtrar por data</h3>
      <input
        type="date"
        name="data"
        className={style.input}
        onChange={(evento) => setData(evento.target.value)}
        placeholder="Por data"
        value={data}
      />
      <label>Status:</label>
      <select
        defaultValue="Ambos"
        name="status"
        id="status"
        onChange={(evento) => {
          setStatus(evento.target.value as IFiltroStatus);
        }}
      >
        <option value="Completos">Completos</option>
        <option value="Incompletos">Incompletos</option>
        <option value="Ambos">Ambos</option>
      </select>
      <button className={style.botao}>Filtrar</button>
    </form>
  );
};

export default Filtro;
