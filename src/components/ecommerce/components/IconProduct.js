'use server';
import Button from './Button.jsx';
import { models } from 'orm';

export default async function IconProduct () {
  'use server';
  // console.log('halo dari verrrr');
  const catalogs = await models.env['product.catalog'].search([])
  // console.log(catalogs.map.toString())

  return (
    <div className="flex gap-4 px-10 pt-7 pb-10 overflow-scroll">
      {catalogs.map((catalog) => (
        <Button className="flex flex-col items-center" delayPressIn={0}>
          <div className="bg-[#FABE78] w-[50px] h-[55px] rounded">
              
          </div>
          <div className="text-[0.70rem] font-bold">
              {catalog.name}
          </div>
        </Button>
      ))}
    </div>
  )
}
