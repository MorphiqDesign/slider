import Slider from './Slider'

const slides = [
  { id: 1, url: 'https://picsum.photos/seed/1/1920/1080', title: 'Mountain View' },
  { id: 2, url: 'https://picsum.photos/seed/2/1920/1080', title: 'City Lights' },
  { id: 3, url: 'https://picsum.photos/seed/3/1920/1080', title: 'Ocean Sunset' },
  { id: 4, url: 'https://picsum.photos/seed/4/1920/1080', title: 'Forest Path' },
  { id: 5, url: 'https://picsum.photos/seed/5/1920/1080', title: 'Desert Dunes' },
]

function App() {
  return <Slider slides={slides} />
}

export default App
