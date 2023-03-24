import IMG from'../img/PJ3.png';

function Pj3(){
    return(
        <div className='intro'>
            <div className='title'>
                <h1>iPills</h1>
                <h3> 22.12.26-23.1.8 (개인 프로젝트)</h3>
            </div>
            <div className='pjItro'>
                <div className='left'>
                    <img src={IMG} className="PJIMG"/>
                    <p className='summary'> 시각장애인들을 위한 알약 인식하는 기기 <br></br> 해당 알약에 대한 복용방법, 주의사항등 사용자가 원하는 정보를 제공한다.</p>
                </div>
                <div className='right'>
                    <div>
                        <h2>기술</h2>
                        <a>YOLOv5,Google OCR, Kakao_TTS, 젯슨나노, Python </a> 
                    </div>
                    <div>
                        <h2>기능</h2>
                        <ul>
                            <li>알약 인식 및 형태 식별</li>
                            <li> 알약 분류 (색상, 각인정보, 모양)</li>
                            <li> 사용자가 원하는 정보를 음성으로 출력</li>
                            
                        </ul>
                    </div>
                    <div>
                        <h2>역할</h2>
                        <ul>
                            <li> 팀장 </li>
                            <li> 아이디어 제안</li>
                            <li> 하드웨어 구성 및 구현( 젯슨나노 ) </li>
                            <li> 데이터 전처리</li>
                            
                        </ul>
                    </div>
                    <div>
                        <h2>느낀점</h2>
                        <a> 젯슨나노라는 새로운 기기와 리눅스라는 환경을 경험해볼수 있어 좋았다. YOLO의 여러가지 버전의 속도와 성능을 비교해 가며 버전을 선택하고 , 이미지 전처리 모델을 비교분석 하면서 결과물을 만들어 내는 것이 성취감이 있었다. 팀장을 하면서 각 파트의 상황과 입장을 이해하고 하나의 프로젝트를 위해 많은 소통이 필요함을 느끼게 되었다.  </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pj3;
