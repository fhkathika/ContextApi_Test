import { TestProvider } from '../context/ContextApi'
import '../styles/globals.css'
import { Home } from './Home'

function MyApp() {
  return 
 (
<TestProvider>
<Home></Home>
  
</TestProvider>
 )
}

export default MyApp
