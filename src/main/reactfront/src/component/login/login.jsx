import axios from "axios";
import {useState} from "react";
import "../../style/loginScreen.css";

function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        name="input_id"
        value={inputId}
        onChange={handleInputId}
    />

    <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        name="input_pw"
        value={inputPw}
        onChange={handleInputPw}
    />

    const onClickLogin = () => {
        console.log('click login')
        console.log('ID : ', inputId)
        console.log('PW : ', inputPw)
        axios.post('http://localhost:8080/api/login', {
            email: inputId,
            passwd: inputPw,
        })
            .then(res => {
                console.log(res)
                console.log('res.data.userId :: ', res.data.userId)
                console.log('res.data.msg :: ', res.data.msg)
                if (res.data.email === undefined) {
                    // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
                    console.log('======================', res.data.msg)
                    alert('입력하신 id 가 일치하지 않습니다.')
                } else if (res.data.email === null) {
                    // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
                    console.log('======================', '입력하신 비밀번호 가 일치하지 않습니다.')
                    alert('입력하신 비밀번호 가 일치하지 않습니다.')
                } else if (res.data.email === inputId) {
                    // id, pw 모두 일치 userId = userId1, msg = undefined
                    console.log('======================', '로그인 성공')
                    sessionStorage.setItem('user_id', inputId)
                    sessionStorage.setItem('name', res.data.name)
                }
                // 작업 완료 되면 페이지 이동(새로고침)
                document.location.href = '/'
            })
            .catch();
    }

    return(
        <div>
            <h2>Login</h2>
            <div>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
            </div>
            <div>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login;
