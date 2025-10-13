import type { FC } from "react";
import './title.scss'

const Title: FC = () => {
    return (
        <div className="title-md">
            <div>
                <span>Frontend</span>
                <span id="h">Tech <br />Conference</span>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </span>
                <span id="btn-1" className="btn">Join</span>
            </div>
            <div>
                <span id="h2">Dive into the world<br />of frontend development</span>
                <span>Specifically, you will learn to create simple projects from scratch and bring them to completion.</span>
                <span id="btn-2" className="btn">Ask question</span>
            </div>
        </div>
    )
}

export default Title