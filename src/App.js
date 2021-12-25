import Header from "./components/Header"

const headerConfig = {
  logo: {
    imgURL: 'https://www.github.com/DesignSystemsOSS.png',
    title: 'Plain UI Kit',
    route: '/',
  },
  options: [
    { type: 'link', name: 'Documentation', route: '/docs' },
    { type: 'link', name: 'GitHub', route: '/github' },
    { type: 'link', name: 'Support Us', route: '/support-donate' },
    { type: 'button-outline', name: 'Login', route: '/login' },
    { type: 'button-solid', name: 'Create an Account', route: '/create-account' }
  ],
  themeConfig: {
    backgroundColor: 'white',
    shadow: true,
    textColor: 'black'
  },
  announcementBar: {
    announcementText: 'We recently raised our seed-funding. Learn more about our journey',
    textColor: 'white',
    backgroundColor: 'blue'
  }
}

export default function App() {
  return (
    <div className="app">
      <Header headerConfiguration={headerConfig} />
    </div>
  )
}