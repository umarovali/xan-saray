import { LuArrowDownRight } from "react-icons/lu";

export default function Title({ children }) {
    return (
        <h2 className="title">{children} <LuArrowDownRight className="title_arrow" /></h2>
    )
}
