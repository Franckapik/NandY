import React from "react";
import store from "../../store/store";
import { useForm } from "react-hook-form";
export const GiveIdea = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    store.dispatch({ type: "ADD IDEA", ideaAdded: data });
    store.dispatch({ type: "CLOSE MODAL" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Titre
      <input type="text" name="title" ref={register} />
      </label>
      <label>Explications
      <textarea name="msg" ref={register}>
      </textarea>
      </label>
      <input type="submit" value={"Envoyer"} />
    </form>
  );
};
