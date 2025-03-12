import { MdOutlineArrowOutward } from "react-icons/md"

function ButtonPrimary({ children }) {
    return (
        <button className="button_primary">{children} <MdOutlineArrowOutward /></button>
    )
}

function ButtonWhite({ children }) {
    return (
        <button className="button_white">{children} <MdOutlineArrowOutward /></button>
    )
}

export { ButtonPrimary, ButtonWhite }