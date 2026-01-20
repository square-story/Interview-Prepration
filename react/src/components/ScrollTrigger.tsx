import React from 'react'
import { useScrollThrottle } from '../hooks/useScrollTrottle'

const ScrollTrigger = () => {
    const handleScroll = () => {
        console.log('Scroll triggered')
    }

    const handleTrottleScroll = useScrollThrottle(handleScroll, 1000)
    return (
        <div style={{ height: "19px", overflow: "scroll" }} onScroll={handleTrottleScroll}>Voluptate excepteur proident minim
            magna id est commodo eu eu excepteur
            adipisicing labore nostrud dolor. Nul
            la amet anim laborum in culpa irure mollit de
            serunt cillum sunt proident commodo. Do sit iru
            re id est fugiat officia cupidatat eu laborum. Veniam
            ex culpa ullamco anim elit pariatur enim qui aute quis dolor
            e. Incididunt enim ipsum sint. Do sunt enim deserunt sit dolor
            nulla enim magna. Labore qui cupidatat consequat laborum al
            iquip ad. Excepteur laborum do aute velit laborum ut in.
            Velit veniam id irure consequat excepteur excepteur
            reprehenderit aliquip ipsum. Sit sunt culpa sit occ
            aecat adipisicing labore. Qui excepteur quis velit a
            d elit nisi occaecat ullamco velit reprehenderit id. Do
            amet commodo labore commodo nostrud Lorem ut elit qui d
            uis. Do in qui adipisicing ipsum nulla veniam in. Laborum adipisici
            ng est id magna ipsum esse adipisicing sint in nostrud culpa duis fugiat
            Lorem. Aute enim aliqua deserunt irure dolor do
            lore. Ut pariatur velit culpa dolore. Sit ea minim ad ex dolore magna c
            ulpa. Incididunt irure sunt et est mollit dolore sit officia id.
        </div>
    )
}

export default ScrollTrigger