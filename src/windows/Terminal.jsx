import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {techStack} from "#constants/index.js";
import WindowControls from "#components/WindowControls.jsx";

const Terminal = () => {
    return <>
    <div id="windows-header">
        <WindowControls traget="terminal"/>
        <h2>Tech Stack</h2>
    </div>

    <div className="techstack">
        <p>
            <span className="font-bold">@sameep % </span>
            show tech stack
        </p>
        <div className="label">
            <p className="w-32" >Category</p>
            <p>Teachnologies</p>
        </div>

        <ul className="content">
            {techStack.map((category, items ) => (
                <li>
                    <check className="check" size={20} />
                    <h3>{category}</h3>
                    <ul>
                        {items.map((item, i) => (
                            <li key={i}>
                                {item}
                                {i < item.length - 1 ? " " : ""}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>

        <div className="footnote">
            <p>
                <Check size={20} /> 5 of 5 stacks loaded successfully (100%)
            </p>

            <p className="text-black">
                <Flag size={15} fill="black"/>
                Render time: 6ms
            </p>
        </div>
    </div>
    </>
};

const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow;
