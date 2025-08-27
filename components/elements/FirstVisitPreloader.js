"use client"
import { useState, useEffect } from "react"
import Preloader from "./Preloader"

export default function FirstVisitPreloader({ children, pageKey }) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Check if this is the first visit to this page
        const hasVisited = localStorage.getItem(`visited_${pageKey}`)
        
        if (hasVisited) {
            // User has visited before, show content immediately
            setIsLoading(false)
            return
        }

        // First visit - wait for images to load
        const waitForImages = () => {
            // Get all images on the page
            const images = document.querySelectorAll('img')
            const imageElements = Array.from(images)
            
            if (imageElements.length === 0) {
                // No images found, show content immediately
                setTimeout(() => {
                    setIsLoading(false)
                    localStorage.setItem(`visited_${pageKey}`, 'true')
                }, 500)
                return
            }

            let loadedCount = 0
            const totalImages = imageElements.length

            const checkImageLoad = (img) => {
                if (img.complete && img.naturalHeight !== 0) {
                    // Image already loaded
                    loadedCount++
                    if (loadedCount === totalImages) {
                        setTimeout(() => {
                            setIsLoading(false)
                            localStorage.setItem(`visited_${pageKey}`, 'true')
                        }, 500)
                    }
                } else {
                    // Image not loaded yet, add event listeners
                    img.addEventListener('load', () => {
                        loadedCount++
                        if (loadedCount === totalImages) {
                            setTimeout(() => {
                                setIsLoading(false)
                                localStorage.setItem(`visited_${pageKey}`, 'true')
                            }, 500)
                        }
                    })
                    img.addEventListener('error', () => {
                        loadedCount++
                        if (loadedCount === totalImages) {
                            setTimeout(() => {
                                setIsLoading(false)
                                localStorage.setItem(`visited_${pageKey}`, 'true')
                            }, 500)
                        }
                    })
                }
            }

            imageElements.forEach(checkImageLoad)
        }

        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', waitForImages)
        } else {
            waitForImages()
        }

        // Fallback: if images take too long, show content anyway
        const timeout = setTimeout(() => {
            setIsLoading(false)
            localStorage.setItem(`visited_${pageKey}`, 'true')
        }, 10000) // 10 seconds timeout

        return () => {
            clearTimeout(timeout)
        }
    }, [pageKey])

    if (isLoading) {
        return <Preloader />
    }

    return children
}
