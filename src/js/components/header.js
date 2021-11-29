document.addEventListener('DOMContentLoaded', () => {
    const headerLinksArr = document.querySelectorAll('.header__link')

    if(headerLinksArr) {
        for(let link of headerLinksArr) {
            link.addEventListener('click', () => {
                const groupName = link.getAttribute('data-name')

                const block = document.getElementById(groupName)

                if(block) {
                    block.scrollIntoView({ behavior: 'smooth', block: 'start'})
                }
            })
        }
    }
})
