import React from "react";
import { useForm } from "react-hook-form";
import useStore from "../../store/zstore";
export const GiveMessage = (props) => {
  const { register, handleSubmit } = useForm();
  const addMsg = useStore(state => state.addMsg);
  const togglePop = useStore(state => state.togglePop)
  const onSubmit = (data) => {
  addMsg(data);
  togglePop();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Prénom
      <input type="text" name="firstName" ref={register} />
      </label>
      <label>Titre
      <input type="text" name="title" ref={register} />
      </label>
      <textarea name="msg" ref={register}>
      </textarea>
      <input type="submit" value={"Envoyer"} />
    </form>
  );
};
