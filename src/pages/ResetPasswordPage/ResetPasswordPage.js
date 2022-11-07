
import  "./ResetPasswordPage.scss"
import {useState} from "react";
import {PageTitle} from "../../components/UiLibraryComponents/PageTitle/PageTitle";
import {InputLocal} from "../../components/UiLibraryComponents/Inputs/InputLocal/InputLocal";
import {SmallImage} from "../../components/UiLibraryComponents/SmallImage/SmallImage";
import resetPasswordFormImage from "../../assets/images/Forgot-password-illustration.jpg"
import {SimpleLink} from "../../components/UiLibraryComponents/SimpleLink/SimpleLink";
import {ButtonBig} from "../../components/UiLibraryComponents/Buttons/ButtonBig/ButtonBig";
import {SimpleTextInfo} from "../../components/UiLibraryComponents/SimpleTextInfo/SimpleTextInfo";


export const ResetPasswordPage = () => {
    
    const [loginInputValue, setLoginInputValue] = useState('');

    const handleClickForm = (e) => {
        e.preventDefault()
        console.log('loginInputValue', loginInputValue)
    }

    return (
        <div className={`resetPasswordPage__main`}>
            <div className={`resetPasswordPage__form-wrapper`}>
                <div className={`resetPasswordPage__image`}>
                    <SmallImage image={resetPasswordFormImage}/>
                </div>
                <PageTitle titleText={"Forgot Password"}/>
                <div className={`resetPasswordPage__form-wrapper-inner`}>
                    <form action="">
                        <div className={`resetPasswordPage__form-inputs-wrapper`}>
                            <div className={`resetPasswordPage__form-input-wrapper`}>
                                <InputLocal
                                    inputType={'text'}
                                    inputClassList={"input-local input-login margin-bottom"}
                                    placeholder={'example@email.com'}
                                    inputValue={loginInputValue}
                                    setInputValue={setLoginInputValue}
                                    inputIcon={"userIcon"}
                                />
                            </div>
                        </div>
                        <div className={`resetPasswordPage__form-buttons-wrapper`}>
                            {<ButtonBig buttonText={'Reset'} buttonAction={handleClickForm}/>}
                            <div className={`resetPasswordPage__form-buttons-info`}>
                                <SimpleTextInfo simpleTextInfo={"Already have an account? "} />
                                <SimpleLink  navigatePath={"loginPage"} linkText={"Login here"}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}



