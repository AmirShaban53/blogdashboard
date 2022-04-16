import { Context } from "../AppContext";
import { useContext } from "react";

const Message = () => {
    const {message, bgColor, active} = useContext(Context);
    return (
        <p className={`message  ${bgColor} rounded-3  py-1 px-3 mt-2 ${active && `trigger`}`}>
            {message}
        </p>
    )
}

export default Message
