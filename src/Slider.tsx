import { useState, useEffect, useCallback } from 'react'

type Slide = {
  id: number
  url: string
  title?: string
}

type SliderProps = {
  slides: Slide[]
  interval?: number
}

export default function Slider({ slides, interval = 5000 }: SliderProps) {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  }, [slides.length])

  const next = useCallback(() => {
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))
  }, [slides.length])

  useEffect(() => {
    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [next, interval])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: index === current ? 1 : 0 }}
        >
          <img
            src={slide.url}
            alt={slide.title ?? ''}
            className="w-full h-full object-cover"
          />
          {slide.title && (
            <div className="absolute inset-x-0 bottom-0 flex justify-center pb-12">
              <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg tracking-tight">
                {slide.title}
              </h2>
            </div>
          )}
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 size-12 flex items-center justify-center rounded-full bg-black/40 text-white text-2xl hover:bg-black/60 transition-colors cursor-pointer"
        aria-label="Previous slide"
      >
        &#8249;
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 size-12 flex items-center justify-center rounded-full bg-black/40 text-white text-2xl hover:bg-black/60 transition-colors cursor-pointer"
        aria-label="Next slide"
      >
        &#8250;
      </button>

      <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`size-2.5 rounded-full transition-all cursor-pointer ${
              index === current ? 'bg-white w-6' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
