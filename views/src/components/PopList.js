import React from "react";
import Pop from "./Pop";
import { GiveMessage } from "./Modal/GiveMessage";
import { GiveIdea } from "./Modal/GiveIdea";
import { GiveInfo } from "./Modal/GiveInfo";
import { ShowContent } from "./Modal/ShowContent";
import useStore from '../store/zstore'


export default function PopList() {
  const content = useStore(state => state.content)
  const popid = useStore(state => state.popid)

  return (
    <>
    {content === "msg" ? <Pop title={'Ecris ton Message !'} children={<GiveMessage />} /> : null}
    {content === "idea" ? <Pop title={'Tu as une idée pour N&Y ?'} children={<GiveIdea />} /> : null}
    {content === "info" ? <Pop title={'Breaking News !'} children={<GiveInfo />} /> : null}
    {content === "showidea" ? ( <Pop children={<ShowContent category={'idea'} popid={popid} />} /> ) : null} 
    {content === "showmsg" ? ( <Pop children={<ShowContent category={'message'} popid={popid} />} /> ) : null} 

    </>
  );
}
