import './searchbar.css'

function Searchbar() {
    return (
        <>
            <div className='searchbar'>
                <input className='search-input' type="text" placeholder='Search' />
                <svg className='search-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M7.66671 14.5C11.1645 14.5 14 11.6645 14 8.16668C14 4.66887 11.1645 1.83334 7.66671 1.83334C4.1689 1.83334 1.33337 4.66887 1.33337 8.16668C1.33337 11.6645 4.1689 14.5 7.66671 14.5Z" stroke="#8C8F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.6667 15.1667L13.3334 13.8333" stroke="#8C8F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>
        </>
    )

}
export default Searchbar
