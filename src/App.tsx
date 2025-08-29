import { Navigate, Route, Routes } from 'react-router'

import { Container } from './components/layout'
import { HomePage, RepoDetailPage } from './pages'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/repo/:owner/:name" element={<RepoDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
