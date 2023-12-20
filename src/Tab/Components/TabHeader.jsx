import React from "react";

export default function TabHeader({ children, link }) {
    const selectTab = (e) => {
        const relData = document.querySelectorAll('.tab-content[data-link]')

        relData.forEach(el => {
            const tabLinkData = el.dataset.link

            if(tabLinkData === undefined) {
                return
            }

            if(tabLinkData === link) {
                el.classList.add('show')
            } else {
                el.classList.remove('show')
            }
        })

        activeCurrentTab(e)
    }

    const activeCurrentTab = (e) => {
        document.querySelectorAll('.tab-header').forEach(el => {
            el.classList.remove('active')
        })

        e.target.classList.add('active')
    }

    return (
        <div className="tab-header" data-link={link !== undefined ? link.toLowerCase() : ''} onClick={selectTab}>
            {children}
        </div>
    )
}