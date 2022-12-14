import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <h1>
                <Link to="/">필수지식</Link>
            </h1>
            <div className="menu">
                <a href="#x" className="link">제목 추가</a>
                <a href="#x" className="link">Day 추가</a>
            </div>
        </div>
    )
}
