'use client'
import { useEffect, useRef } from 'react'
import Script from 'next/script'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

export default function MapboxMap() {
  const mapRef = useRef(null)
  const initialized = useRef(false)

  function initMap() {
    if (!mapRef.current || initialized.current || !window.mapboxgl || !MAPBOX_TOKEN) return
    initialized.current = true

    const mapboxgl = window.mapboxgl
    mapboxgl.accessToken = MAPBOX_TOKEN

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [-0.14765, 51.51358],
      zoom: 17,
      pitch: 0,
      bearing: 0,
      attributionControl: false,
    })

    map.addControl(new mapboxgl.AttributionControl({ compact: true }))
    map.scrollZoom.disable()
    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    const el = document.createElement('div')
    el.innerHTML = `
      <div style="background:linear-gradient(105deg,#1A6B4A 40%,#4ade80 50%,#1A6B4A 60%);background-size:200% auto;animation:shine 20s linear infinite;color:white;font-family:Inter,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:6px 12px;border-radius:999px;white-space:nowrap;box-shadow:0 4px 20px rgba(26,107,74,0.4);cursor:pointer;">RCA Ltd</div>
      <div style="width:2px;height:10px;background:#1A6B4A;margin:0 auto;"></div>
      <div style="width:8px;height:8px;background:#1A6B4A;border-radius:50%;margin:0 auto;box-shadow:0 0 0 3px rgba(26,107,74,0.3);"></div>
    `

    new mapboxgl.Marker({ element: el, anchor: 'bottom' })
      .setLngLat([-0.14765, 51.51358])
      .addTo(map)
  }

  useEffect(() => {
    // If the script was already loaded on a previous page visit
    if (window.mapboxgl) {
      initMap()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!MAPBOX_TOKEN) return (
    <div className="relative h-[280px] w-full rounded-2xl overflow-hidden sovereign-shadow border border-[#1A6B4A]/20 bg-[#1A6B4A]/5" />
  )

  return (
    <>
      <Script
        src="https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js"
        strategy="afterInteractive"
        onLoad={initMap}
      />
      <div
        ref={mapRef}
        className="relative h-[280px] w-full rounded-2xl overflow-hidden sovereign-shadow border border-[#1A6B4A]/20"
      />
    </>
  )
}
