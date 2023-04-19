
export interface TextDescriptionProps {
    title: string,
    shortContentOne?: string,
    shortContentSecond?: string
}

const TextDescription: React.FC<TextDescriptionProps> = ({ title, shortContentOne, shortContentSecond }) => {

    return (
        <div>
            <h1 className="titelButtonDetail">{title}</h1 >

            <p className="contentDetailButton">
                {shortContentOne}
                <br />
                <br />
                {shortContentSecond}
            </p>
            {/* <h1 className="titelButtonDetail">이렇게 사용하세요. 💁‍♂️</h1 >

            <p className="contentDetailButton">
                웹에서 보기 상자에는 웹에서 이메일 콘텐츠에 접근할 수 있는 공유용 URL 링크가 삽입되어있습니다.
                <br />
                <br />
                이메일이 제대로 표시되지 않을 때 웹에서 콘텐츠를 확인하도록 유도할 수 있습니다.
            </p> */}
        </div>
    )

}

export default TextDescription;