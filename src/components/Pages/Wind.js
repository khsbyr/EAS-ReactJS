import React from "react"
import './Wind.scss'

const Wind = () => {
    return (

        <>
            <a href="./Help" className="button pulse">
                БУЦАХ
            </a>
            <div className="cardb text-white">
                <h1 className="entry-title"> Хүчтэй салхи гэж юу вэ?</h1>
                <p style={{ textAlign: 'justify' }}>Салхины хурд 18 м / с ба түүнээс их агаарын урсгалыг хүчтэй салхи гэнэ . Хүчтэй салхи улирлын байдлаас хамааран хүчтэй шороон шуурга , хүчтэй цасан шуурга болдог .</p>
            </div>
            <div className="cardb text-white">
                <h1 className="entry-title"> Авах арга хэмжээ</h1>
                <p style={{ textAlign: 'justify' }} >1. ЦАХИЛГААН ХЭРЭГСЭЛ , САМБАРЫГ САЛГАХ <br /><br />2. ХҮЙТЭН ҮЕД ДУЛААН , НЯГТ НЭХЭЭСТЭЙ , УС НЭВТЭРДЭГГҮЙ ХӨНГӨН ХУВЦСЫГ ОЛОН ДАВХАРЛАН ӨМСӨХ <br /><br />3. ТУСЛАМЖ ИРТЭЛ АВТОМАШИНААСАА ГАРАХГҮЙ , АВТОМАШИНАА ОРХИЖ ХОЛ ЯВАХГҮЙ БАЙХ <br /><br />4. МАЛЫГ НӨМӨР ГАЗАР ТОГТООХ <br /><br />5.ХАЛУУН ШИНГЭН ЗҮЙЛ УУХ , КОФЕ БОЛОН АРХИ УУХГҮЙ БАЙХ "</p>
            </div>
            <div className="cardb text-white">
                <h1 className="entry-title"> Урьдчилан сэргийлэх, хамгаалах</h1>
                <p style={{ textAlign: 'justify' }}>1. ЦАГ АГААРЫН ӨДӨР ТУТМЫН МЭДЭЭГ ТОГТМОЛ ХҮЛЭЭН АВЧ АЖИЛ АМЬДРАЛАА ЗОХИЦУУЛАХ<br /><br />2. ТҮЛЭЭ ТҮЛШ, ХҮНСЭЭ НӨӨЦЛӨХ<br /><br />3. МАЛ УРУУДАХ ҮЕД ТОГТООХ ГАЗАР ОРНЫГ МЭДДЭГ БАЙХ<br /><br />4. ХААЛГА, ЦОНХ, САЛХИВЧИЙГ ХААЖ БЭХЛЭХ</p>
            </div>
        </>

    )
}

export default Wind