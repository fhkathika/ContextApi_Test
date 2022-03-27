import { TestProvider } from '../context/ContextApi'
import '../styles/globals.css'
import { Home } from './Home'

function MyApp({Component,pageProps}) {
  return (

    <TestProvider>
  <Component {...pageProps}/>
  
</TestProvider>
  )


}

export default MyApp
