import '../style.css'

const Header = ({ money, total }) => {
  return (
    <> 
        <div className="site-header">
            <header className="header container">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c82dd5b3-b0d8-44e8-b11d-a50e55b7b9de/deykn0d-610c2145-b981-4a09-87d8-8a41e93479f8.png/v1/fill/w_1280,h_307/walmart_logo__my_version__by_carlosoof10_deykn0d-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzA3IiwicGF0aCI6IlwvZlwvYzgyZGQ1YjMtYjBkOC00NGU4LWIxMWQtYTUwZTU1YjdiOWRlXC9kZXlrbjBkLTYxMGMyMTQ1LWI5ODEtNGEwOS04N2Q4LThhNDFlOTM0NzlmOC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2yzMNMrO-dElJo8HyEj_tsgNpBUB5UaLrVWHqzhKXIQ" alt="" />
                <div>
                  <h3 className='header-title'>${money - total} <i class="fa-solid fa-wallet"></i></h3>
                </div>
            </header> 
        </div>
    </>
  )
}

export default Header
