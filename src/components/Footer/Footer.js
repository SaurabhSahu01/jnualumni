import React from 'react';
import MobileFooter from './MobileFooter';
import TabFooter from './TabFooter';
import DesktopFooter from './DesktopFooter';
import { useMediaQuery } from 'react-responsive'
function Footer() {
    const isMobile = useMediaQuery({
        query: '(max-width: 699px)',
      })
    const isTab = useMediaQuery({
        query: '(min-width: 700px)'
      })
    const isDesktop = useMediaQuery({
        query: '(min-width: 870px)'
      })
    return (
        <>
        {isDesktop ? <DesktopFooter></DesktopFooter> : (isTab ? <TabFooter></TabFooter> : (isMobile ? <MobileFooter></MobileFooter> : <></>))}
        </>
    )
}

export default Footer