import React from "react";
import { useForm } from "react-hook-form";
import useStore from "../../store/zstore";


export const GiveIdea = (props) => {
  const { register, handleSubmit } = useForm();
  const addIdea = useStore(state => state.addIdea);
  const togglePop = useStore(state => state.togglePop)
  const onSubmit = (data) => {
  addIdea(data);
    togglePop()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Titre
      <input type="text" name="Titre" ref={register} />
      </label>
      <label>Explications
      <textarea name="Explication" ref={register}>
      </textarea>
      </label>
      <input type="submit" value={"Envoyer"} />
    </form>
  );
};
