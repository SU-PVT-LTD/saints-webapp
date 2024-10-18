import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Homepage, PrivacyPolicyPage, ShippingReturnPolicy, TermsOfUserPage } from './pages'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
        <Route path='/return-policy' element={<ShippingReturnPolicy />} />
        <Route path='/terms-of-use' element={<TermsOfUserPage />} />

        <Route path="*" element={<Homepage />} />

      </Routes>
    </>
  )
}

export default App
