import styled from 'styled-components'
import './App.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Logo = styled.div`
  font-family: SentientReg, sans-serif;
  font-size: 10vw;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;

  button {
    font-family: Roboto Mono, sans-serif;
  }
`

function App() {

  const navigate = useNavigate();

  const handlePrivacyPolicyBtn = () => {
    // e.preventDefault()
    navigate("./privacy-policy")
  }

  const handleReturnPolicyBtn = () => {
    navigate("./return-policy")
  }

  const handleTouBtn = () => {
    navigate("./terms-of-use")
  }

  return (
    <>
      <Logo>
        SAINTS UNDONE
      </Logo>
      <ButtonGroup>
          <Button
            sx={{
              backdropFilter: 'blur(20px) saturation(180%)',
              WebkitBackdropFilter: 'blur(20px) saturation(180%)',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              borderRadius: '30px',
              border: '1px solid rgba(255, 255, 255, 0.125)',
              padding: '10px 20px',
              color: '#ffffff'
            }}
            onClick={() => handlePrivacyPolicyBtn()}
          >
            PRIVACY POLICY
          </Button>

          <Button
            sx={{
              backdropFilter: 'blur(20px) saturation(180%)',
              WebkitBackdropFilter: 'blur(20px) saturation(180%)',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              borderRadius: '30px',
              border: '1px solid rgba(255, 255, 255, 0.125)',
              padding: '10px 20px',
              color: '#ffffff'
            }}
            onClick={() => handleReturnPolicyBtn()}
          >
            RETURN POLICY
          </Button>

          <Button
            sx={{
              backdropFilter: 'blur(20px) saturation(180%)',
              WebkitBackdropFilter: 'blur(20px) saturation(180%)',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              borderRadius: '30px',
              border: '1px solid rgba(255, 255, 255, 0.125)',
              padding: '10px 20px',
              color: '#ffffff'
            }}
            onClick={() => handleTouBtn()}
          >
            TERMS OF USE
          </Button>
      </ButtonGroup>
    </>
  )
}

export default App
