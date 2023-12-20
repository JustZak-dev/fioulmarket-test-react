import React, {useEffect} from "react";
import TabContainer from "../Tab/TabContainer";
import TabHeader from "../Tab/Components/TabHeader";
import TabContent from "../Tab/Components/TabContent";
import LoginForm from "../Form/Login/LoginForm";
import RegistrationForm from "../Form/Register/RegistrationForm";

export default function Auth() {
    const tabs = {
        LOGIN: 'login',
        REGISTER: 'register',
    }

    return (
        <TabContainer>
            <TabHeader link={tabs.LOGIN}>J'ai un compte</TabHeader>
            <TabHeader link={tabs.REGISTER}>Je n'ai pas de compte</TabHeader>

            <TabContent link={tabs.LOGIN}>
                <LoginForm />
            </TabContent>
            <TabContent link={tabs.REGISTER}>
                <RegistrationForm />
            </TabContent>
        </TabContainer>
    )
}