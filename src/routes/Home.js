import Nav from '../contents/Nav';
import Footer from '../contents/Footer';
import IDPhoto from '../img/dahye.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Home(){
    return(
        
        <div className='page'> 
            <Nav /> 
            <div className='mine honeMid'>
                
                <div className='home'>
                    <div>
                        <img src={IDPhoto} className="IDPhoto"></img>
                    </div>
                    <div className='myintroduction '>
                        <h1> 프론트앤드 개발자를 꿈꾸는 김다혜입니다.</h1>
                        <h2> 문제를 인식하면 해결을 위해 노력합니다.</h2>
                        <h3> Ai 교육을 듣던 중 시각장애인의 얄약 구별에 대한 불편함에 대해 인식하게된 저는 Ai를 이용하여 이를 해결하고자 아이디어를 제안하였고 5명 안에 선정되어 해커톤 프로젝트를 진행할수 있었습니다. </h3>
                        <h2> 더 나은 방향을 위해 노력고 고민합니다.<br></br></h2>
                        <h3> 하나의 프로젝트가 끝나도 그 프로젝트에 대한 평가를 지속합니다. 어떤 부분이 아쉬웠고 어떤 기능을 추가해보고 싶은지를 생각하며 변경해봅니다. ComeTrue web도 총 3번 이상의 구조 변경과 기능 추가를 수행하였습니다.</h3>

                        <h3 className='keyWord'> #도전정신 #아이디어 뱅크 #질문요정 #소통의 창구</h3>
                    
                    </div>
                </div>
                
            </div>
            <Footer />
    
        </div>
    );
}
export default Home;
