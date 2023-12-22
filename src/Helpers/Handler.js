export const changePasswordType = (baseEl, passwordEl, activeKey = 'active') => {
    let el = baseEl.target

    const password = passwordEl

    if(el.classList.contains(activeKey)) {
        password.setAttribute('type', 'text')
        return true
    }

    password.setAttribute('type', 'password')
    return false
}