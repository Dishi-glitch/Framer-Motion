import './App.css'; 
import React from 'react'
import {motion} from 'motion/react';

function App() {
  return (

  <div>

    {/* <motion.img 
    initial={{
      x:0,
      y:0
    }}
    animate={{
      x:100
    }} src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96768393-b5ef-4ecd-b39c-6ef9c12ef61a/dm9vmne-aa74c851-ef96-428e-b103-9cd06349be60.png/v1/fill/w_941,h_849/oggy_png_by_mistercraigboi_dm9vmne-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE1NSIsInBhdGgiOiIvZi85Njc2ODM5My1iNWVmLTRlY2QtYjM5Yy02ZWY5YzEyZWY2MWEvZG05dm1uZS1hYTc0Yzg1MS1lZjk2LTQyOGUtYjEwMy05Y2QwNjM0OWJlNjAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BtJz8U6DI7PTocQRhOx6fE5iWhX345iOS1UYjos9PJY'
    >
    </motion.img> */}
   
    <motion.div 
      className='box'
      // drag
      // whileDrag={{
      //   scale:0.8
      // }}
      // dragConstraints={{
      //   left:0,
      //   right:500,
      //   top:0,
      //   bottom:500
      // }}

      // dragDirectionLock='true' 
      //only moves in one direction at a time

      // initial={{
      //   x:0,
      //   y:0
      // }}
      // animate={{
      //   x: [0,900,900,0,0],
      //   y: [0,0,400,400,0],
      //   rotate: [0,360,0,-360,0]
        
      // }}
      whileHover={{
        backgroundColor:'blue',
        x:100
      }}
      whileTap={{
        backgroundColor:'crimson'
      }}
      // transition={{
      //   duration:3,
      //   delay:1,
      //   repeat:3, //will work 4 times
      //   ease: 'anticipate'
        
      // }}
    >
    </motion.div>

    {/* <motion.div 
      className='circle' 
      animate={{
        x: 500
      }}
    >
    </motion.div> */}
  </div>
);
}
export default App
