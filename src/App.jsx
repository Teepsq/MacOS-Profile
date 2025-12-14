import { Navbar, Welcome, Dock } from "#components";
import { Terminal } from "#windows";
import { Safari } from "#windows";


import gsap from "gsap";
import { Draggable} from "gsap/Draggable";
import Resume from "#windows/Resume.jsx";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock/>
            <Terminal/>
            <Safari />
            <Resume />
        </main>
    );
};

export default App
