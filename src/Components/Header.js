import Sidebar from "Components/Sidebar"

function Header() {
    return (
        <>
        <header>
            <head>
                <meta charSet="UTF-8"/>
                <meta content="IE=edge"/>
                <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=5.0,user-scalable=yes,target-densitydpi=medium-dpi"/>
                <title>해밀원</title>
                <script src="/js/jquery-1.9.1.min.js"></script>
                <script src="/js/bootstrap.min.js"></script>
                <script src="/js/sweetalert2.all.min.js"></script>
                <script src="/js/ui.js"></script>

                <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
                <link href="/css/all.min.css" rel="stylesheet" type="text/css"/>
                <link href="/css/sideber.css" rel="stylesheet" type="text/css"/>
                <link href="/css/common.css" rel="stylesheet" type="text/css"/>
                <link href="/css/member.css" rel="stylesheet" type="text/css"/>
                <link href="/css/layout.css" rel="stylesheet" type="text/css"/>
                <link href="/css/med.css" rel="stylesheet" type="text/css"/>
            </head>

            <Sidebar/>

            <div className="tnb">
                <a heft="/med/index.php">
                    <img src="/img/common/top_menu01.svg"/><span>메인</span>
                </a>
                <a>
                    <img src="/img/common/top_menu02.svg"/><span>계좌정보</span>
                </a>
                <a>
                    <img src="/img/common/top_menu03.svg"/><span>마이페이지</span>
                </a>
                <a>
                    <img src="/img/common/top_menu04.svg"/><span>홈페이지</span>
                </a>
                <a>
                    <img src="/img/common/top_menu05.svg"/><span>로그아웃</span>
                </a>
            </div>
        </header>
        </>
    );
}

export default Header;