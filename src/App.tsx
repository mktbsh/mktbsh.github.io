
function App() {

  return (
 <div className="relative flex min-h-screen flex-col overflow-hidden bg-gray-50 py-6 sm:py-12 px-4 sm:px-10">
   <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
   <div className="isolate flex justify-start">
     <h1 className="text-[6vmin] font-bold">
       <div className="text-[8vmin]">mktbsh.github.io</div>
        for
       <div className="relative inline-block h-[7vmin] ml-2">
         <div className="absolute [perspective:100vmin]">
           <div className="animate-cube h-[10vmin] origin-center [transform-style:preserve-3d]">
             <div className="absolute text-[6vmin] font-bold text-purple-500 [backface-visibility:hidden] [transform:translateZ(3vmin)]">Tool</div>
             <div className="absolute text-[6vmin] font-bold text-indigo-600 [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(3vmin)]">Portfolio</div>
             <div className="absolute text-[6vmin] font-bold text-purple-500 [backface-visibility:hidden] [transform:rotateX(180deg)_translateZ(3vmin)]">Tool</div>
             <div className="absolute text-[6vmin] font-bold text-indigo-600 [backface-visibility:hidden] [transform:rotateX(90deg)_translateZ(3vmin)]">Portfolio</div>
             {/* <div className="absolute text-[6vmin] font-bold text-violet-600 [backface-visibility:hidden] [transform:rotateX(180deg)_translateZ(3vmin)]">Finance</div> */}
             {/* <div className="absolute text-[6vmin] font-bold text-rose-600 [backface-visibility:hidden] [transform:rotateX(90deg)_translateZ(3vmin)]">Portfolio</div> */}
           </div>
         </div>
       </div>
     </h1>
   </div>
   <div className="my-4">
   </div>
 </div>

  )
}

export default App
