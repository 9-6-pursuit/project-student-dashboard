const Header = ({handlePageRefresh}) => {
    return (
        <div className="text-center text-bg-success opacity-75 py-5">
            <h1 className="--pointer-cursor" onClick={handlePageRefresh}>Student Dashboard</h1>
        </div>
    )
}

export default Header;