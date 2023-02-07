import Layout from "Layout/Layout";

function App() {
    return (
        <Layout id="App">
            <section className="patient_main">
                <div className="register">
                    <h3>간편 환자등록 - 수정 (2)</h3>
                    <div className="box1">
                        <div className="form">
                            <label>이름</label><input type="text" placeholder="이름"/>
                            <label>주민등록번호</label><input type="text" placeholder="주민등록번호"/>
                            <label>연락처</label><input type="text" placeholder="연락처"/>
                            <label>주소</label><input type="text" placeholder="주소"/>
                        </div>
                        <a className="btn btn_middle btn_red">등록</a>
                    </div>
                </div>
                <div className="real_time">
                    <div className="box2">
                        <div className="box_title">
                            <strong>실시간 진료 명단</strong>
                            <div className="title_btn">
                                <span>7명</span>
                                <a className="arrow on"><img src="../img/common/arrow_left.svg"/></a>
                                <a className="arrow off"><img src="../img/common/arrow_right.svg"/></a>
                                <a className="btn btn_small btn_white">직접접수</a>
                            </div>
                        </div>
                        <div className="list">
                            <ul>
                                <li>
                                    <strong className="patient_name">김환자</strong>
                                    <p>
                                        <span className="state ing">진료중</span>
                                        {/*진료중일 때 className : ing, 대기중일 때 className : standby -->*/}
                                        <a className="btn btn_mini btn_line">완료</a>
                                    </p>
                                </li>
                                <li>
                                    <strong className="patient_name">이환자</strong>
                                    <p>
                                        <span className="state standby">대기중</span>
                                        <a className="btn btn_mini btn_line">호출</a>
                                    </p>
                                </li>
                                <li>
                                    <strong className="patient_name">박환자</strong>
                                    <p>
                                        <span className="state standby">대기중</span>
                                        <a className="btn btn_mini btn_line">호출</a>
                                    </p>
                                </li>
                                <li>
                                    <strong className="patient_name">정환자</strong>
                                    <p>
                                        <span className="state standby">대기중</span>
                                        <a className="btn btn_mini btn_line">호출</a>
                                    </p>
                                </li>
                                <li>
                                    <strong className="patient_name">강환자</strong>
                                    <p>
                                        <span className="state standby">대기중</span>
                                        <a className="btn btn_mini btn_line">호출</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="today">
                    <div className="box2">
                        <div className="box_title bg_red">
                            <strong>금일 진료 예약건</strong>
                            <div className="title_btn">
                                <span>7명</span>
                                <a className="arrow on"><img src="../img/common/arrow_left.svg"/></a>
                                <a className="arrow off"><img src="../img/common/arrow_right.svg"/></a>
                                <a className="btn btn_small btn_white">직접접수</a>
                            </div>
                        </div>
                        <div className="list">
                            <ul>
                                <li>
                                    <p>
                                        <strong className="patient_name">김환자</strong>
                                        <span className="birth">1990-01-30</span>
                                    </p>
                                    <p>
                                        <span className="time">11:00</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong className="patient_name">김환자</strong>
                                        <span className="birth">1990-01-30</span>
                                    </p>
                                    <p>
                                        <span className="time">11:00</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong className="patient_name">김환자</strong>
                                        <span className="birth">1990-01-30</span>
                                    </p>
                                    <p>
                                        <span className="time">11:00</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong className="patient_name">김환자</strong>
                                        <span className="birth">1990-01-30</span>
                                    </p>
                                    <p>
                                        <span className="time">11:00</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong className="patient_name">김환자</strong>
                                        <span className="birth">1990-01-30</span>
                                    </p>
                                    <p>
                                        <span className="time">11:00</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="request">
                    <h3>진료 예약 요청</h3>
                    <div className="box1">
                        <ul className="list">
                            <li>
                                <p>김환자</p>
                                <p>
                                    <span className="date_time">2022-11-02 11:00</span>
                                    <a className="btn btn_mini btn_line">확인</a>
                                </p>
                            </li>
                            <li>
                                <p>김환자</p>
                                <p>
                                    <span className="date_time">2022-11-02 11:00</span>
                                    <a className="btn btn_mini btn_line">확인</a>
                                </p>
                            </li>
                            <li>
                                <p>김환자</p>
                                <p>
                                    <span className="date_time">2022-11-02 11:00</span>
                                    <a className="btn btn_mini btn_line">확인</a>
                                </p>
                            </li>
                            <li>
                                <p>김환자</p>
                                <p>
                                    <span className="date_time">2022-11-02 11:00</span>
                                    <a className="btn btn_mini btn_line">확인</a>
                                </p>
                            </li>
                            <li>
                                <p>김환자</p>
                                <p>
                                    <span className="date_time">2022-11-02 11:00</span>
                                    <a className="btn btn_mini btn_line">확인</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="patient_latest">
                <h3>최근 진료 리뷰</h3>
                <div className="box2">
                    <div className="table">
                        <table>
                            <thead>
                            <tr>
                                <th>작성일</th>
                                <th>구분</th>
                                <th>작성내용</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>2022-10-31</td>
                                <td>예약인증</td>
                                <td>언제나 친절하고 과잉 진료 없이 원하는 통증만 딱 잡아주십니다 약 떨어질 쯤에 미리 연락주셔서 편하게 예약 잡았어요</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default App;
