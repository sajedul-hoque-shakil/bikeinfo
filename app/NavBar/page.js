import Image from 'next/image'
import Link from 'next/link'
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import Logo from '../../public/logobike.png'
const NavBar = () => {
  return (
    <section className='bg-slate-200 flex justify-around items-center -my-5 overflow-hidden '>
        <div className="">
        <Link href={'/'} className='flex '>
        <Image src={Logo} alt='Bike images' className='w-32'/>
        <h1 className='text-3xl font-black relative top-12 -left-4'>Bike Info</h1>
        </Link>
        </div>

        <div className='relative'>
            <input type='text' placeholder='Search' className='py-2 pl-5 pr-14 text-lg rounded-md bg-slate-500 text-white'/>
            <Tooltip >
        <Button type="primary" shape="circle" icon={<SearchOutlined />} className='absolute right-3 top-2' />
      </Tooltip>
        </div>
        <div className='flex gap-2'>
        <Button type="primary">
            Login
          </Button>
        <Button type="primary">
            SignUp
          </Button>
            
        </div>
    </section>
  )
}

export default NavBar