import './UnivDialog.css'

const List = [
    {
        textID: 1,
        text: "할로윈 이벤트",
    },
    {
        textID: 2,
        text: "가천대 축제 공지사항",
    },
    {
        textID: 3,
        text: "교환 학생 신청 공지",
    }
]

export const Attribute = [
    {
        name: "경고",
        color: 'rgba(209, 111, 20, 0.579)',
        background: "antiquewhite",
        text: "Warning: ",
        imoge: "⚠️",
        button: "OK"
    },
    {
        name: "인사말",
        color: "blue",
        background: "salmon",
        text: "안녕하세요. 좋은 하루 보내세요!",
        imoge: "✋"
    },
    {
        name: "오류",
        color: "red",
        background: "seashell",
        text: "ERROR!",
        imoge: "🚫",
        button: "확인",
    },
    {
        name: "공지사항",
        color: "purple", 
        background: "rgb(207, 151, 151)",
        text: List.map((items) => {
            return(
                <li key={items.textID}>{items.text}</li>
            )
        }), 
        img: 'Inform.png',
        imoge: "📌",
        button: "More Page",
    },
]