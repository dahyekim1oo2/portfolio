import Logo from '../img/logo.png';
import "../css/Nav.css";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
function Nav(){
    // Link to=""를 사용하여 원하는 링크 주소를 추가함
    // a href 대신 Link to를 사요하는 이유 => a 를 이요하면 브라우저가 새로고침 (전체 재 랜더링됨)
    const [width, setWidth] = useState(window.innerWidth);
    const [nav, showNav]=useState(false);
    const onClick=()=>{
        showNav(nav =>!nav)
    }
    const handleResize = debounce(() => {
        setWidth(window.innerWidth);
    }, 100);
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },  []);
    
    return (
        <div className={width>800?'nav':'smallNav'}>
            <div>
                <div className='logo'>
                    <img src={Logo}></img>
                    <i className={width<=800?"show fa-solid fa-bars":"hidden"} onClick={onClick}></i>
                </div>
                <div className='rightNav'>
                    <div>
                        <ul className={width<=800?(nav?"show":"hidden"):"Navlist"}>
                            <li className='gohome'><Link  to={`${process.env.PUBLIC_URL}/`}>Home</Link></li>
                            <li className='about'><Link to={`${process.env.PUBLIC_URL}/about`}>About</Link></li>
                            <li className='skills'><Link to={`${process.env.PUBLIC_URL}/pj`}>Skills</Link></li>
                            <li className='project'><Link to={`${process.env.PUBLIC_URL}/skills`}>Projects</Link></li>

                        </ul>
                    </div>
                    
                </div>
            </div>
    
            
        </div>
    );
}

//  export defaule : 변수, 함수 , 오브젝트, 클래스 등을 전달할수 있는 명령어
// defaulet 를 붙이면 중괄호 없이 변수 들을 import 해올수 있다. 
export default Nav;