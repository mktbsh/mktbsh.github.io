import { Header, Footer } from './organisms'

type Props = {
    children: React.ReactNode
}

const Layout: React.VFC<Props> = ({ children }) => {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Header/>
            <main className="flex-grow">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export {
    Layout
}