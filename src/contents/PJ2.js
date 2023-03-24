import IMG from'../img/PJ2.png';

function Pj2(){
    return(
        <div className='intro'>
            <div className='title'>
                <h1>OTT site</h1>
                <h3> 22.3.1-진행중 (개인 프로젝트)</h3>
            </div>
            <div className='pjItro'> 
                <div className='left'>
                    <img src={IMG} className="PJIMG"/>
                    <p className='summary'> 원하는 영화가 없을때 사용자가 원하는 정보를 찾을수 있는 기능을 추가한 ott 사이트를 구현했다.</p>
                </div>
                <div className='right'>
                    <div>
                        <h2>사용기술</h2>
                        <p> useState, react-router-dom, slick, </p>
                    </div>
                    <div>
                        <h2>기능할 구현</h2>
                        <ul>
                            <li>영화 목록 불러오기 </li>
                            <li>종료 예정인 영화 목록 보여주기</li>
                            <li>보고 싶은영화가 없을때 설문 페이지 </li>
                        </ul>
                    </div>

                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pj2;
