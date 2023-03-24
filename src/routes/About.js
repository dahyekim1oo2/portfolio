import Nav from '../contents/Nav';
import Footer from '../contents/Footer';

function About(){
    return(
        <div >
            <Nav />
            <div className='about contents'>
                <div className='line'>
                    <div className='ABox'> 
                        <i className="fa-solid fa-user"></i>
                        <h3>이름</h3>
                        <div>
                            <p>김다혜(Kim Dahye) </p>
                        </div>
                    </div>
                    <div className='ABox'>
                        <i className="fa-solid fa-cake-candles"></i>
                        <div >
                            
                            <h3>생년월일</h3>
                            <p>1998.10.02 </p>
                        </div>
                            
                    </div>
                    <div className='ABox'>
                        <i className="fa-solid fa-location-dot"></i>
                        <div>
                            <h3>주소</h3>
                            <p>경기도 안산시 단원구 </p>
                        </div>
                            
                    </div>

                </div>

                <div className='line'>
                    <div className='ABox'>
                        <i className="fa-solid fa-graduation-cap"></i>
                        <div >
                            <h3>최종학력</h3>
                            <p>전남대학교 의공학과 </p>
                        </div>
                    </div>
                    <div className='ABox'>
                        <i className="fa-solid fa-chalkboard-user"></i>
                        <div>
                            <h3>이수교육</h3>
                            <p>AI 아이펠학교 (인천2기) </p>
                        </div>
                        
                    </div>
                    <div className='ABox'>
                        <i className="fa-solid fa-paintbrush"></i>
                        <div>
                            <h3>취미</h3>
                            <div>
                                <ul>
                                    <li>그림그리기(painting)</li>
                                    <li> 독서 (reading) </li>
                                    <li>  사이클링(cycling)</li>
                                </ul>
                            </div>
                
                        </div>
                        
                    </div>
                </div>


            </div>

                
            <Footer />
        </div>
    );
}

export default About;
