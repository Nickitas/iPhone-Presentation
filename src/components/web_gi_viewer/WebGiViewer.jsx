import { useState, useRef, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react'
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    mobileAndTabletCheck
} from 'webgi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import cls from './webgiCanvasContainer.module.scss'
import { scrollAnimation } from '../../lib/scroll-animation'

gsap.registerPlugin(ScrollTrigger)

const WebGiViewer = forwardRef((props, ref) => {
    const canvasRef = useRef(null)
    const [viewerRef, setViewerRef] = useState(null)
    const [targetRef, setTargetRef] = useState(null)
    const [cameraRef, setCameraRef] = useState(null)
    const [positionRef, setPositionRef] = useState(null)
    const canvasContainerRef = useRef(null)
    const [previewMode, setPreviewMode] = useState(false)
    const [isMobile, setIsMobile] = useState(null)

    useImperativeHandle(ref, () => ({
        triggerPreview() {
            setPreviewMode(true)
            canvasContainerRef.current.style.pointerEvents = 'all'
            props.contentRef.current.style.opacity = '0'

            gsap.to(positionRef, {
                x: 13.04,
                y: -2.01,
                z: 2.29,
                duration: 2,
                onUpdate: () => {
                    viewerRef.setDirty()
                    cameraRef.positionTargetUpdated(true)
                }
            })

            gsap.to(targetRef, { x: 0.11, y: 0.0, z: 0.0, duration: 2 })
            viewerRef.scene.activeCamera.setCameraOptions({ controlsEnabled: true })
        }
    }))

    const memoizedScrollAnimation = useCallback(
        (position, turger, isMobileOrTablet, onUpdate) => {
            if (position && turger && onUpdate) {
                scrollAnimation(position, turger, isMobileOrTablet, onUpdate)
            }
        }, []
    )

    const setupViewer = useCallback(async () => {
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        })

        setViewerRef(viewer)
        const isMobileOrTablet = mobileAndTabletCheck()
        setIsMobile(isMobileOrTablet)
    
        const manager = await viewer.addPlugin(AssetManagerPlugin)
    
        const camera = viewer.scene.activeCamera
        const position = camera.position
        const target = camera.target

        setCameraRef(camera)
        setPositionRef(position)
        setTargetRef(target) 

        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)
        // await viewer.addPlugin(DiamondPlugin)
        // await viewer.addPlugin(FrameFadePlugin)
        // await viewer.addPlugin(GLTFAnimationPlugin)
        // await viewer.addPlugin(GroundPlugin)
        await viewer.addPlugin(BloomPlugin)
        // await viewer.addPlugin(TemporalAAPlugin)
        // await viewer.addPlugin(AnisotropyPlugin)
    
        viewer.renderer.refreshPipeline()
    
        await manager.addFromPath('scene-black.glb')

        viewer.getPlugin(TonemapPlugin).config.clipBackground = true
        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false })
        
        if (isMobileOrTablet) {
            position.set(-16.7, 1.17, 11.7)
            target.set(0, 1.37, 0)
            props.contentRef.current.className = 'mobile-or-tablet';
        }        

        window.scrollTo(0, 0)

        let needUpdate = true

        const onUpdate = () => {
            needUpdate = true
            viewer.setDirty()
        }

        viewer.addEventListener('preFrame', () => {
            if (needUpdate) {
                camera.positionTargetUpdated(true)
                needUpdate = false
            }

        })

        memoizedScrollAnimation(position, target, isMobileOrTablet, onUpdate)
    }, [])

    useEffect(() => {
        setupViewer()
    }, [])

    const handleExit = useCallback(() => {
        canvasContainerRef.current.style.pointerEvents = 'none'
        props.contentRef.current.style.opacity = '1'
        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false })
        setPreviewMode(false)

        gsap.to(positionRef, {
            x: !isMobileOrTablet ? 1.56 : 9.36, 
            y: !isMobileOrTablet ? 5.0 : 10.95, 
            z: !isMobileOrTablet ? 0.01 : 0.09, 
            scrollTrigger: {
                trigger: '#display', 
                start: 'top bottom', 
                end: 'top top',
                scrub: 2, 
                immediateRender: false
            }, 
            onUpdate: () => {
                viewerRef.setDirty()
                cameraRef.positionTargetUpdated(true)
            }
        })
        .to(targetRef, {
            x: !isMobileOrTablet ? -0.55 : -1.62, 
            y: !isMobileOrTablet ? 0.32 : 0.02, 
            z: !isMobileOrTablet ? 0.0 : -0.06, 
            scrollTrigger: {
                trigger: '#display', 
                start: 'top bottom', 
                end: 'top top',
                scrub: 2, 
                immediateRender: false
            }, 
        })

    }, [canvasContainerRef, viewerRef, positionRef, cameraRef, targetRef])

    const web_gi_viewer = (
        <div className={cls.webgiCanvasContainer} ref={canvasContainerRef}>
            <canvas id={cls.webgiCanvas} ref={canvasRef} />
            {
                previewMode && (
                    <button className={cls.button} onClick={handleExit}>
                        Exit
                    </button>
                )
            }
        </div>
    )

    return web_gi_viewer
})

export { WebGiViewer }