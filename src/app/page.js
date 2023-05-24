import Image from 'next/image'
import Link from 'next/link'
import Software from "../assets/main.jpg"
import Headcard from '@/components/Headcard'
import './globals.css'

export default function Home() {
  return (
    <main className="m-7  ">

      <div className='flex-row my-32 flex flex-wrap justify-around  align-middle   '>


        <div className='basis-1/3 flex-col justify-start align-start  '>
        <h1 className='w-83'>welcome a place where you can turn your ideas into reality!</h1>
        <h3>
          A first of a kind product tailored to fit your needs
        </h3>

          <Link className='button mt-9' href={"#"}>
            Sign up
          </Link>

          </div>


        <div className='basis-1/3 flex justify-evenly align-middle '>
          <Image className='rounded-sm' src={Software} width={900}  priority={true} ></Image>
        </div>

        


      </div>
     

     <div className='flex m-20'>

     <Headcard title={"Web development"} content={["Cutting-Edge Technologies","Seamless User Experience","Responsive and Mobile-First Design", "easily configurable"]}/>




     </div>
      <div>
        
        </div>
  


      
    




    </main>
  )
}
