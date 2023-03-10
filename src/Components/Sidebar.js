function Sidebar() {
    return (
        <>
        <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
            <i className="fa-light fa-bars"></i>
        </a>
        <nav id="sidebar" className="sidebar-wrapper">
            <div className="sidebar-content">
                <div className="sidebar-brand">
                    <a href="#"><img src="/img/common/logo.svg" alt="해밀한의원 원외탕전실"/></a>
                    <div id="close-sidebar">
                        <i className="fa-light fa-xmark"></i>
                    </div>
                </div>

                <div className="sidebar-header">
                    <div className="user-info">
                        <span className="user-name">유신한의원</span>
                        <span className="user-role"><img src="/img/common/user_icon01.svg"/>김유신 담당자</span>
                        <span className="user-point"><img src="/img/common/user_icon02.svg"/>1,000점</span>
                    </div>
                </div>


                <div className="sidebar-menu">
                    {/*sidebar-content*/}
                    <div className="side-icon">
                        <a href="#side-icon1" className="active">
                            <img src="/img/common/sidebar_icon01.svg"/><p>환자진료</p>
                        </a>
                        <a href="#side-icon2">
                            <img src="/img/common/sidebar_icon02.svg"/>
                            <p>처방하기</p>
                        </a>
                        <a href="#side-icon3">
                            <img src="/img/common/sidebar_icon03.svg"/>
                            <p>한의학몰</p>
                        </a>
                        <a href="#side-icon4">
                            <img src="/img/common/sidebar_icon04.svg"/>
                            <p>기본설정</p>
                        </a>
                    </div>
                    <div className="lnb">
                        <div id="side-icon1">
                            <ul>
                                <li className="header-menu">
                                    <span>진료실</span>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#"><img src="/img/common/sidemenu01_01.svg"/><span>환자 관리</span></a>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#"><img
                                        src="/img/common/sidemenu01_02.svg"/><span>예약·진료 관리</span></a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li><a href="#">실시간 진료 관리</a></li>
                                            <li><a href="#">예약관리</a></li>
                                            <li><a href="#">최근 진료 내역</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#"><img src="/img/common/sidemenu01_04.svg"/><span>진료 리뷰 관리</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div id="side-icon2">
                            <ul>
                                <li className="header-menu">
                                    <span>탕진실</span>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <img src="/img/common/sidemenu02_01.svg"/>
                                        <span>처방하기</span>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a href="#">탕전처방</a>
                                            </li>
                                            <li>
                                                <a href="#">환제처방</a>
                                            </li>
                                            <li>
                                                <a href="#">산제처방</a>
                                            </li>
                                            <li>
                                                <a href="#">약속처방</a>
                                            </li>
                                            <li>
                                                <a href="#">서술식</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <img src="/img/common/sidemenu02_02.svg"/>
                                        <span>복용법 관리</span>
                                    </a>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <img src="/img/common/sidemenu02_03.svg"/>
                                        <span>자주 쓰는 처방</span>
                                    </a>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <img src="/img/common/sidemenu02_04.svg"/>
                                        <span>주문 배송 관리</span>
                                    </a>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <img src="/img/common/sidemenu02_05.svg"/>
                                        <span>처방 기본 설정</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div id="side-icon3">
                            <ul>
                                <li className="header-menu"><span>카테고리</span></li>
                                <li className="sidebar-dropdown">
                                    <a href="#"><img src="/img/common/sidemenu03_01.svg"/><span>약속 처방재</span></a>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#"><img src="/img/common/sidemenu03_02.svg"/><span>기획전</span></a>
                                </li>
                                <li className="header-menu">
                                    <span>주문관리</span>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#"><img src="/img/common/sidemenu03_03.svg"/><span>장바구니</span></a>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#"><img
                                        src="/img/common/sidemenu03_04.svg"/><span>주문·배송 조회</span></a>
                                </li>

                            </ul>
                        </div>
                        <div id="side-icon4">
                            <ul>
                                <li className="header-menu">
                                    <span>기본설정</span>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#"><img src="/img/common/sidemenu04_01.svg"/><span>한의원 정보</span></a>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#"><img src="/img/common/sidemenu04_02.svg"/><span>진료 예약 설정</span>
                                    </a>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <img src="/img/common/sidemenu04_03.svg"/>
                                        <span>이벤트 관리</span>
                                    </a>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <img src="/img/common/sidemenu04_04.svg"/>
                                        <span>포인트 관리</span>
                                    </a>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#"><img
                                        src="/img/common/sidemenu04_05.svg"/><span>직원 계정 관리</span></a>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#"><img src="/img/common/sidemenu04_06.svg"/><span>요청·문의하기</span></a>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#"><img src="/img/common/sidemenu04_07.svg"/><span>홈페이지 제작·관리</span></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
);
}

export default Sidebar;