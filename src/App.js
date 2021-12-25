import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Input from "./components/Input"
import Landing from "./pages/Landing"

const headerConfig = {
  logo: {
    imgURL: 'https://www.github.com/DesignSystemsOSS.png',
    title: 'Plain UI Kit',
    route: '/',
    logoShape: 'circle'
  },
  options: [
    { type: 'link', name: 'Documentation', route: '/docs' },
    { type: 'link', name: 'GitHub', route: '/github' },
    { type: 'link', name: 'Support Us', route: '/support-donate' },
    { type: 'link', name: 'Discord', route: '/discord' },
    { type: 'button', buttonVariant: 'button-outline', name: 'Login', route: '/login' },
    { type: 'button', buttonVariant: 'button-solid', name: 'Create an Account'}
  ],
  themeConfig: {
    backgroundColor: 'white',
    shadow: true,
    textColor: 'black'
  },
  announcementBar: {
    announcementText: 'We recently raised our seed-funding. Learn more about our journey. LOL Just joking! :`)',
    textColor: 'white',
    backgroundColor: '#7900FF'
  }
}

export default function App() {
  return (
    <div className="app">
      <Header headerConfiguration={headerConfig} />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  )
}