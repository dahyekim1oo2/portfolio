import IMG from'../img/PJ1.png';

function Pj1(){
    return(
        <div className='intro'>
            <div className='title'>
                <h1>ComeTrue</h1>
                <h3> 22.12.26-23.1.8 (개인 프로젝트)</h3>
            </div>
            <div className='pjItro'>
                <div className='left'>
                    <img src={IMG} className="PJIMG"/>
                    <p className='summary'>Momentum(Chrome web) upgrade <br></br>모멘텀 웹을 사용하면서 불편했던 부분을 보완 및 수정하고 기능을 추가하였다.</p>
                </div>
                <div className='right'>
                    <div>
                        <h2>사용기술</h2>
                        <p>weather API, JavaScript, localstroge</p>
                    </div>
                    
                    <div>
                        <h2>기능 구현</h2>
                        <ul>
                            <li>검색 기능(구글, 유튜브, 네이버) </li>
                            <li>이력서 제출 마감을 위한 초시계 기능</li>
                            <li>목표 달성을 위한 투투리스트 기능</li>
                            <li>사용자의 성취감을 위한 캐릭터 이동 기능</li>
                            <li> 북마크 아이콘 기능</li>
                            <li>현재 지역의 날씨 및 기온 제공 </li>
                            
                        </ul>
                    </div>
                    <div>
                        <h2>느낀점</h2>
                        <p> Momentum web을 클론 코딩 강의를 듣는데 내가 변경해보고자 하는 부분을 알려주지 않으셔서 당황스러웠지만 스스로 공부하면서 기능을 구현할수 있어 더 좋았다. 처음 클론 코딩을 할때는 기존에 앱을 업그레이드만 해야하는 줄 알았지다. 그러나 다른 완성품들을 보며 틀을 깨도 되다는 것을 알았다. 나의 업그레이드하며 나만의 색깔과 평소 원했던 기능을 추가해 새로운 web을 만들수 있었다. 이 프로젝트를 진행하며 소통의 중요성과 스스로 구현하는 것의 중요성이 중요한 것을 느낄수 있었다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pj1;