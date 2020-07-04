import React from "react";
import store from "../../store/store";
import { useForm } from "react-hook-form";
export const GiveMessage = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    store.dispatch({ type: "ADD MSG", msgAdded: data });
    store.dispatch({ type: "CLOSE MODAL" });
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
