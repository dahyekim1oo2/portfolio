import Nav from '../contents/Nav';
import Footer from '../contents/Footer';
import { ReactComponent as Arduino } from '../img/arduino.svg';
import { ReactComponent as Vscode } from '../img/vscode.svg';



function Skills(){

    return(
        <div >
            <Nav />
            <div className='skill'>
                <div className='titleBox'>
                    <h3>Frontend</h3>
                    <h3>Tool</h3>
                    <h3>etc</h3>

                </div>
                <div className='skillBox'>
                    <h3 className='boxName'>Frontend</h3>
                    <div>
                        <div className='box'>
                            <div>
                            <i className="fa-brands fa-html5"></i>
                                <a> html</a>
                            </div>
                            <div>
                                <i className="fa-brands fa-css3-alt"></i>
                                <a> css</a>
                            </div>
                            <div>
                                <i className="fa-brands fa-js"></i>
                                <a> JavaScript</a>
                            </div>
                            <div>
                                <i className="fa-brands fa-react"></i>
                                <a> React</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='boxName'> Tool</h3> 
                        <div className='box'>
                            <div>
                                <i className="fa-brands fa-github"></i>
                                <a> github</a>
                            </div>
                            <div>
                                <Vscode  width="60" height="30" viewBox="2 1 20  30" stroke='black' />
                                <a> Vscode</a>
                            </div>
                            <div>
                                <Arduino  width="50" height="20" viewBox="0 0 100 120" stroke='black' />
                                <a> Arduino IDE</a>
                            </div>
                            <div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <h3 className='boxName'> etc</h3> 
                        <div className='box'>
                            <div>
                                <i className="fa-brands fa-python"></i>
                                <a> Python</a>
                            </div>
                            <div>
                                <i className="fa-regular fa-hard-drive"></i>
                                <a> Jetson Nano </a>
                            </div>
                            <div>
                            <i className="fa-regular fa-hard-drive"></i>
                                <a>  Arduino</a>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                

                
                

                
            </div>
            <Footer />
        </div>
    );
}
export default Skills;
