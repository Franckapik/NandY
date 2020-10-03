import React from "react";
import { useForm } from "react-hook-form";
import useStore from "../../store/zstore";

export const GiveInfo = (props) => {
  const { register, handleSubmit } = useForm();
  const changeInfo = useStore(state => state.changeInfo);
  const togglePop = useStore(state => state.togglePop)
  const onSubmit = (data) => {
  changeInfo(data.msg);
  togglePop();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nouvelle actualité
      <textarea name="msg" ref={register}>
      </textarea>
      </label>
      <input type="submit" value={"Envoyer"} />
    </form>
  );
};
