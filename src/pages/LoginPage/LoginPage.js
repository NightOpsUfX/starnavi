import  "./LoginPage.scss"
import {useState} from "react";
import {Title} from "../../components/UiLibraryComponents/Title/Title";
import {InputLocal} from "../../components/UiLibraryComponents/Inputs/InputLocal/InputLocal";
import {SmallImage} from "../../components/UiLibraryComponents/SmallImage/SmallImage";
import loginFormImage from "../../assets/images/Login-illustration.jpg"
import {SimpleLink} from "../../components/UiLibraryComponents/SimpleLink/SimpleLink";
import {ButtonBig} from "../../components/UiLibraryComponents/Buttons/ButtonBig/ButtonBig";
import {SimpleTextInfo} from "../../components/UiLibraryComponents/SimpleTextInfo/SimpleTextInfo";
import {ButtonSmall} from "../../components/UiLibraryComponents/Buttons/ButtonSmall/ButtonSmall";


export const LoginPage = () => {
    const [loginInputValue, setLoginInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('');

    const handleClickForm = (e) => {
        e.preventDefault()
        console.log('loginInputValue', loginInputValue)
        console.log('passwordInputValue', passwordInputValue)
    }

    return (
        <div className={`loginPage__main`}>
            <div className={`loginPage__form-wrapper`}>
                <div className={`loginPage__image`}>
                    <SmallImage image={loginFormImage}/>
                </div>
                <Title titleText={"Welcome Back!"}/>
                <div className={`loginPage__form-wrapper-inner`}>
                    <form action="">
                        <div className={`loginPage__form-inputs-wrapper`}>
                            <div className={`loginPage__form-input-wrapper`}>
                                <InputLocal
                                    inputType={'text'}
                                    inputClassList={"input-local input-login margin-bottom"}
                                    placeholder={'example@email.com'}
                                    inputValue={loginInputValue}
                                    setInputValue={setLoginInputValue}
                                    inputIcon={"userIcon"}
                                />
                            </div>
                            <div className={`loginPage__form-input-wrapper`}>
                                <InputLocal
                                    inputType={'password'}
                                    inputClassList={"input-local input-password"}
                                    placeholder={'password'}
                                    inputValue={passwordInputValue}
                                    setInputValue={setPasswordInputValue}
                                    inputIcon={"lockIcon"}
                                />
                                <SimpleLink navigatePath={"resetPasswordPage"}  linkText={"Forgot Password?"}/>
                            </div>
                        </div>
                        <div className={`loginPage__form-buttons-wrapper`}>
                            {<ButtonBig buttonText={'Log In'} buttonAction={handleClickForm}/>}
                            <div className={`loginPage__form-buttons-info`}>
                                <SimpleTextInfo simpleTextInfo={"Or connect with social"} />
                            </div>
                            <div className={`loginPage__form-social-buttons`}>
                                <ButtonSmall buttonText={"Facebook"} buttonAction={handleClickForm}/>
                                <ButtonSmall buttonText={"Google"} classList={"button-alt margin-top"} buttonAction={handleClickForm}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
