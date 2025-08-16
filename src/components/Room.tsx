import  { useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
const URL = "http://localhost:3000";
const Room = () => {
        //   const [searchParams, setSearchParams] = React.useSearchParams(s);

    useEffect(()=>{
        const socket=io(URL);
        socket.on("pre-offer",async({roomId})=>{
            console.log("pre-offer received");
            console.log({roomId});
            console.log("socket id", socket.id);
            console.log("sending the pre-offer from ", socket.id);
              socket.emit("pre-offer-answer",{
                roomId: roomId,
                socketId: socket.id,
            })

        //     //pre-offer answer sent
        //     socket.emit("pre-offer-answer", {
        //         roomId: roomId,
        //         type: "sender",
        //         answer:"accepted" 
        //     });

        //     console.log("pre-offer answer sent")
        // socket.on("pre-offer-answer",async({roomId, answer,type})=>{
        //     console.log("pre-offer-answer received",{
        //         roomId, answer, type
        //     });	
            
        // });
         });

    });
   
  return (
    <div>Room</div>
  )
}


export default Room;