import React, {useEffect, useRef} from "react";
import './TabContainer.css'

export default function TabContainer({ children, firstElement = true }) {
    const tabContainerEl = useRef()

    useEffect(() => {
        if(firstElement) {
            showFirstElement()
        }
    }, [firstElement])

    const showFirstElement = () => {
        const el = tabContainerEl.current

        const enablePairTab = (tabDataLink) => {
            const tabHeader = el.querySelector(`.tab-header[data-link=${tabDataLink}]`)
            const tabContent = el.querySelector(`.tab-content[data-link=${tabDataLink}]`)

            if(tabHeader === undefined && tabContent === undefined) {
                return
            }

            tabHeader.classList.add('active')
            tabContent.classList.add('show')
        }

        el.querySelectorAll('.tab-header').forEach((element, index) => {
            if(index !== 0) {
                return
            }

            const tabLinkData = element.dataset.link

            enablePairTab(tabLinkData)
        })
    }

    return (
        <div ref={tabContainerEl} className="tab-container">
            {children}
        </div>
    )
}