/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import*as a from"fs";let handler=async(e,{conn:l})=>{let r=await l.getName(e.sender),t=e.reply(MultiNK.Proces(r));await t;try{let i=await fetchJson(`https://latam-api.vercel.app/api/xd_img?apikey=${MyApiKey}`);l.sendMessage(e.chat,{image:{url:i.imagen},jpegThumbnail:a.readFileSync("./multimedia/imagenes/logo.jpg"),caption:`\xaa`},{quoted:e})}catch(d){e.reply(MultiNK.Error0())}};handler.help=["xd"],handler.tags=["random"],handler.command=/^(xd)$/i,handler.limit=!0;export default handler;
