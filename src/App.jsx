import { useRef } from 'react'
import { Nav } from './components/nav/Nav'
import { Jumbotron } from './components/jumbotron/Jumbotron'
import { Sound } from './components/sound/Sound'
import { Display } from './components/display/Display'
import { WebGiViewer } from './components/web_gi_viewer/WebGiViewer'
import { Loader } from './components/loader/Loader'

const App = () => {
  const webgiViewerRef = useRef()
  const contentRef = useRef()

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview()
  }

  return (
    <div className='App'>
      <Loader />
      <div ref={contentRef} id='content'>
        <Nav />
        <Jumbotron />
        <Sound />
        <Display triggerPreview={handlePreview} />
      </div>
      <WebGiViewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  )
}

export default App