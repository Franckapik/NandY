import React from "react";
import store from "../../store/store";
import { useForm } from "react-hook-form";
export const GiveInfo = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    store.dispatch({ type: "ADD INFO", infoAdded: data.msg });
    store.dispatch({ type: "CLOSE MODAL" });
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
